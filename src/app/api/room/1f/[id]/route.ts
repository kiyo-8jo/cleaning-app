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

// 1階の部屋情報を編集するAPI
export const PUT = async (req: Request) => {
  try {
    // パラメーター取得
    const id: number = parseInt(req.url.split("/1f/")[1]);
    const {
      cleaningType,
      stayCleaningType,
      isKeyBack,
      isCleaningComplete,
      isWaitingCheck,
      nowBeds,
      newBeds,
      adult,
      inf,
      kidInf,
      memo,
    } = await req.json();

    await connectDb();

    console.log(cleaningType)

    const editedRoom = await prisma.rooms1f.update({
      data: {
        cleaningType,
        stayCleaningType,
        isKeyBack,
        isCleaningComplete,
        nowBeds,
        isWaitingCheck,
        newBeds,
        adult,
        inf,
        kidInf,
        memo,
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
