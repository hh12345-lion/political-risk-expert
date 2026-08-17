import { google, sheets_v4 } from "googleapis";

type CellValue = string | number | boolean | null;

interface AppendResult {
  success: boolean;
  updatedRange: string | null | undefined;
  sheetName: string;
}

function normalizePrivateKey(raw?: string): string | undefined {
  if (!raw) return undefined;
  let key = raw.trim();
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }
  return key.replace(/\\n/g, "\n");
}

function getAuthClient() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim(),
      private_key: normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
}

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() &&
      process.env.GOOGLE_PRIVATE_KEY?.trim() &&
      process.env.GOOGLE_SHEET_ID?.trim()
  );
}

/**
 * Single shared worksheet for every enquiry on this site.
 * Uses GOOGLE_SHEET_TAB_NAME when set; otherwise the first tab.
 * Never creates additional tabs.
 */
async function resolveSheetTab(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string
): Promise<string> {
  const preferred = process.env.GOOGLE_SHEET_TAB_NAME?.trim();
  if (preferred) return preferred;

  const meta = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets.properties.title",
  });
  const titles =
    meta.data.sheets
      ?.map((s) => s.properties?.title)
      .filter((t): t is string => Boolean(t)) ?? [];

  if (titles.length === 0) {
    throw new Error("Spreadsheet has no worksheets");
  }

  return titles[0];
}

export async function appendRow(values: CellValue[]): Promise<AppendResult> {
  const sheets = getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID?.trim();

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID: set GOOGLE_SHEET_ID");
  }

  const sheetName = await resolveSheetTab(sheets, spreadsheetId);
  const safeName = sheetName.replace(/'/g, "''");

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `'${safeName}'!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
    sheetName,
  };
}
