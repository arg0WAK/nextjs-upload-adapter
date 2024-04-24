import { createWriteStream, existsSync, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";
import path from "path";

export const POST = async (request) => {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { error: "No files received." },
        { status: 400 }
      );
    }

    const filename = uuidv4() + "." + "webp";
    const uploadDir = path.join(process.cwd(), "public", "upload");

    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, filename);
    const writeStream = createWriteStream(filePath);

    await pipeline(
      file.stream(),
      sharp().resize(1200, 675).webp({ quality: 75 }),
      writeStream
    );

    const uploadPath = "/upload/" + filename;

    return NextResponse.json({
      Message: "Success",
      status: 201,
      location: uploadPath,
    });
  } catch (error) {
    console.log("Error occurred ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
