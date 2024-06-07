import { data } from "@/assets/mocks/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(data);
}
