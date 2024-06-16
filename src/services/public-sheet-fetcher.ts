import { DataResponse, Project } from "@/types/public_monad_sheet";
import PublicGoogleSheetsParser from "public-google-sheets-parser";

export async function fetchPublicSheet(): Promise<Project[]> {
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const parser = new PublicGoogleSheetsParser(spreadsheetId);
    const data = await parser.parse();
    return data;
}
