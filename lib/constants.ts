export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.politicalriskexpert.com";
export const SITE_NAME = "Political Risk Expert";
export const SITE_EMAIL = "cases@politicalriskexpert.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/politicalriskexpert";

export const COLORS = {
  primary: "#0E1419",
  accent: "#3D6B7A",
  highlight: "#8F7350",
  background: "#EEF1F4",
  sectionAlt: "#E2E7ED",
  border: "#AEB8C4",
  heading: "#0E1419",
  body: "#4A5560",
  signal: "#A63D40",
} as const;
