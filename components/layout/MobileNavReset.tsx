"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Keeps the server-rendered navigation in step with the route: closes the
 * CSS-only menus after a navigation and marks the rail entry for the current
 * section so its number shows in gold.
 */
export function MobileNavReset() {
  const pathname = usePathname();

  useEffect(() => {
    const toggle = document.getElementById("mobile-nav-toggle") as HTMLInputElement | null;
    if (toggle) toggle.checked = false;
    document
      .querySelectorAll<HTMLDetailsElement>("#mobile-menu details[open]")
      .forEach((d) => (d.open = false));
    // Drop focus so a clicked sidebar flyout closes too.
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();

    document.querySelectorAll<HTMLElement>("[data-rail]").forEach((el) => {
      const paths = (el.dataset.rail ?? "").split(",").filter(Boolean);
      const active = paths.some((p) => pathname === p || pathname.startsWith(`${p}/`));
      if (active) el.setAttribute("data-active", "true");
      else el.removeAttribute("data-active");
    });
  }, [pathname]);

  return null;
}
