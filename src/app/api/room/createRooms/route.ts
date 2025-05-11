import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface ExcelData {
  id: number;
  type: string;
  cleaningType: string;
  inBeds: number;
  inAdult: number;
  inInf: number;
  nowBeds: number;
  inKidsInf: number;
}

const prisma = new PrismaClient();

// db接続
const connect = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connect();
    // 既存のテーブルのデータをすべて削除
    await prisma.rooms1f.deleteMany({});
    await prisma.rooms2f.deleteMany({});

    const { newRooms1f, newRooms2f } = await req.json();

    // 鍵がすでに返却されている清掃方法の部屋はisKeyBackをtrueに、それ以外をfalseに設定
    const setIsKeyBack = (cleaningType: string) => {
      if (cleaningType === "IN" || cleaningType === "NONE") return true;
      return false;
    };

    // 連泊の部屋の連泊清掃方法はデフォルトをECOに、連泊でない部屋の連泊清掃方法はNOT-SELECTに設定
    const setStayCleaning = (cleaningType: string) => {
      if (cleaningType === "STAY") return "ECO";
      return "NOT-SELECT";
    };

    // 1階のデータ更新用Promise
    const createTable1f = prisma.rooms1f.createMany({
      data: newRooms1f.map((data: ExcelData) => ({
        id: data.id,
        roomType: data.type,
        cleaningType: data.cleaningType,
        isKeyBack: setIsKeyBack(data.cleaningType),
        isCleaningComplete: false,
        isWaitingCheck: false,
        stayCleaningType: setStayCleaning(data.cleaningType),
        nowBeds: data.nowBeds,
        newBeds: data.inBeds,
        adult: data.inAdult,
        inf: data.inInf,
        kidInf: data.inKidsInf,
        memo: "",
      })),
    });

    // 2階のデータ更新用Promise
    const createTable2f = prisma.rooms2f.createMany({
      data: newRooms2f.map((data: ExcelData) => ({
        id: data.id,
        roomType: data.type,
        cleaningType: data.cleaningType,
        isKeyBack: setIsKeyBack(data.cleaningType),
        isCleaningComplete: false,
        isWaitingCheck: false,
        stayCleaningType: setStayCleaning(data.cleaningType),
        nowBeds: data.nowBeds,
        newBeds: data.inBeds,
        adult: data.inAdult,
        inf: data.inInf,
        kidInf: data.inKidsInf,
        memo: "",
      })),
    });

    // 実行
    Promise.all([createTable1f, createTable2f]);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
