"use client";

import RoomCard from "@/app/components/common/roomCard/RoomCard";
import { getRooms1f } from "@/app/lib/features/rooms1f/rooms1fSlice";
import { getRooms2f } from "@/app/lib/features/rooms2f/rooms2fSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/hooks";
import { useEffect } from "react";

const FrontPage = () => {
  const dispatch = useAppDispatch();
  const { is1f } = useAppSelector((state) => state.is1f);
  const { rooms1f, getRooms1fStatus } = useAppSelector(
    (state) => state.rooms1f
  );
  const { rooms2f, getRooms2fStatus } = useAppSelector(
    (state) => state.rooms2f
  );

  // is1Fの値によって表示する階を変更
  const floorRooms = is1f ? rooms1f : rooms2f;

  // 部屋データの取得
  useEffect(() => {
    dispatch(getRooms1f());
    dispatch(getRooms2f());
  }, [dispatch]);

  return (
    <main className="bg-blue-50 flex flex-wrap justify-center h-full w-[75%] ml-5 mb-3 p-3 rounded-2xl">
      {/* データ取得成功 */}
      {getRooms1fStatus === "succeeded" &&
        getRooms2fStatus === "succeeded" &&
        floorRooms.map((room) => <RoomCard room={room} key={room.id} />)}
      {/* ロード中 */}
      {getRooms1fStatus === "pending" ||
        (getRooms2fStatus === "pending" && <div>データ取得中...</div>)}
      {/* データ取得失敗 */}
      {getRooms1fStatus === "failed" ||
        (getRooms2fStatus === "failed" && <div>エラーが発生しました;</div>)}
    </main>
  );
};

export default FrontPage;
