import { NextResponse } from "next/server";
import { rmSync } from "fs";
import path from "path";

export const GET = async (request) => {
  const authHeader = request.headers.get("authorization");

  console.log(authHeader);

  console.log(`${process.env.CRON_SECRET}`);

  if (authHeader !== `${process.env.CRON_SECRET}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const uploadDir = path.join(process.cwd(), "public/upload");

  try {
    rmSync(uploadDir, { recursive: true, force: true });
    return NextResponse.json({ message: "Upload directory is cleared." });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
