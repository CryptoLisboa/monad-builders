import { fetchPublicSheet } from "@/services/public-sheet-fetcher";
// import axios from "axios";
// import { google } from "googleapis";
import { NextResponse } from "next/server";

// const sheets = google.sheets("v4");

// const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
// const RANGE = "Sheet1!A3:H71"; // Adjust the range according to the sheet structure

export async function GET() {
  try {
    const data = await fetchPublicSheet();
    return NextResponse.json({ data, status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
