import { data } from "@/assets/mocks/data";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(data);
}
