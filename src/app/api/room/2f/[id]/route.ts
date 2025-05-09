import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// db接続
export const connectDb = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
  }
};

// 2階の部屋情報を編集するAPI
export const PUT = async (req: Request) => {
  try {
    // パラメーター取得
    const id: number = parseInt(req.url.split("/2f/")[1]);
    const {
      cleaningType,
      isKeyBack,
      isCleaningComplete,
      stayCleaningType,
      nowBeds,
      newBeds,
      adult,
      inf,
      kidInf,
      memo,
      isWaitingCheck,
    } = await req.json();

    await connectDb();

    const editedRoom = await prisma.rooms2f.update({
      data: {
        cleaningType,
        isKeyBack,
        isCleaningComplete,
        stayCleaningType,
        nowBeds,
        newBeds,
        adult,
        inf,
        kidInf,
        memo,
        isWaitingCheck,
      },
      where: { id },
    });
    return NextResponse.json(
      { message: "Success", editedRoom },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
