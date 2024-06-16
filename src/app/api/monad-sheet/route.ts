import { fetchPublicSheet } from "@/services/public-sheet-fetcher";
import { Project } from "@/types/public_monad_sheet";
// import axios from "axios";
// import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import PublicGoogleSheetsParser from "public-google-sheets-parser";

// const sheets = google.sheets("v4");

const SPREADSHEET_ID = "1BkBAHhwbHMK7spTrBa9kmgWeBqKPJOTR6Ebl6eENOwQ";
// const RANGE = "Sheet1!A3:H71"; // Adjust the range according to the sheet structure

// return NextResponse.json({ message: "Hello, world!" });

export async function GET(req: NextRequest, res: NextResponse) {
    try {

        const data = await fetchPublicSheet();
        console.log(data);
        return NextResponse.json({ data, status: 200 });

        // const response = await axios.get(
        //     `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${process.env.GOOGLE_SHEETS_API_KEY}`
        // );

        // const rows = response.data.values;

        // const data = rows.map((row) => ({
        //     category: row[1],
        //     name: row[2],
        //     native: row[3] === "TRUE",
        //     xLink: row[4],
        //     websiteLink: row[5],
        //     discordLink: row[6],
        //     announcedByMonad: row[7] === "TRUE",
        // }));

        // // Organize data by protocol type
        // const organizedData = data.reduce((acc, current) => {
        //     const protocolType = row[0];
        //     if (!acc[protocolType]) {
        //         acc[protocolType] = [];
        //     }
        //     acc[protocolType].push(current);
        //     return acc;
        // }, {});
        // return NextResponse.json({ organizedData, status: 200 });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
    }
}

// export async function GET(req: NextRequest, res: NextResponse) {
//     return NextResponse.json({ message: "Hello, world!" });
// }
