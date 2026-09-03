import { SITE_URL } from "../constants";
import { buildPublicUrlInventory } from "./publicUrlInventory";
import { practiceAreas } from "@/data/practice-areas";
import { riskTypes } from "@/data/risk-types";
import { caseTypes } from "@/data/case-types";
import { guides } from "@/data/guides";
import { services } from "@/data/services";

export type ArchIssue = { level: "error" | "warn"; message: string };

export function verifySeoArchitecture(): ArchIssue[] {
  const issues: ArchIssue[] = [];

  if (SITE_URL !== "https://politicalriskexpert.com") {
    issues.push({
      level: "warn",
      message: `SITE_URL should be https://politicalriskexpert.com (got ${SITE_URL})`,
    });
  }

  const inventory = buildPublicUrlInventory(SITE_URL);
  const expectedDynamic =
    practiceAreas.length +
    riskTypes.length +
    caseTypes.length +
    guides.length +
    services.length;
  const dynamicInSitemap = inventory.entries.filter(
    (e) =>
      e.path.startsWith("/practice-areas/") ||
      e.path.startsWith("/risk-types/") ||
      e.path.startsWith("/case-types/") ||
      e.path.startsWith("/guides/") ||
      e.path.startsWith("/services/")
  ).length;

  if (dynamicInSitemap !== expectedDynamic) {
    issues.push({
      level: "error",
      message: `Expected ${expectedDynamic} dynamic URLs in sitemap inventory, got ${dynamicInSitemap}`,
    });
  }

  const expectedStaticMin = 12;
  if (inventory.entries.length < expectedStaticMin + expectedDynamic - 5) {
    issues.push({
      level: "warn",
      message: `Sitemap inventory has ${inventory.entries.length} URLs; expected at least ~${expectedStaticMin + expectedDynamic}`,
    });
  }

  return issues;
}
