import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// db接続
const connectDB = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
  }
};

// 2階の部屋取得API
export const GET = async () => {
  try {
    await connectDB();
    const rooms_2f = await prisma.rooms2f.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return NextResponse.json({ message: "Success", rooms_2f }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
