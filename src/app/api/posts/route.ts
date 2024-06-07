import { data } from "@/assets/mocks/data";

import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(data);
}
