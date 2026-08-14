export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.politicalriskexpert.com";
export const SITE_NAME = "Political Risk Expert";
export const SITE_EMAIL = "cases@politicalriskexpert.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/politicalriskexpert";

export const COLORS = {
  primary: "#1B1E2A",
  accent: "#3A4D8C",
  highlight: "#C9A227",
  background: "#FAF7F2",
  sectionAlt: "#EFE8DC",
  border: "#D9D0C3",
  heading: "#1B1E2A",
  body: "#4E5363",
  signal: "#9B3D3D",
} as const;
