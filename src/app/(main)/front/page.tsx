"use client";

import Error from "@/app/components/common/error/Error";
import Fetching from "@/app/components/common/fetching/Fetching";
import FrontRoomCard from "@/app/components/front/roomCard/FrontRoomCard";
import { useAppSelector } from "@/app/lib/hooks/hooks";

const FrontPage = () => {
  const { is1f } = useAppSelector((state) => state.is1f);
  const { rooms1f, getRooms1fStatus } = useAppSelector(
    (state) => state.rooms1f
  );
  const { rooms2f, getRooms2fStatus } = useAppSelector(
    (state) => state.rooms2f
  );

  // is1Fの値によって表示する階を変更
  const floorRooms = is1f ? rooms1f : rooms2f;

  return (
    <main className="bg-blue-50 flex flex-wrap justify-center h-full w-[75%] ml-5 mb-3 p-3 rounded-2xl">
      {/* データ取得成功 */}
      {getRooms1fStatus === "succeeded" &&
        getRooms2fStatus === "succeeded" &&
        floorRooms.map((room) => <FrontRoomCard room={room} key={room.id} />)}
      {/* ロード中 */}
      {(getRooms1fStatus === "pending" || getRooms2fStatus === "pending") && (
        <Fetching />
      )}
      {/* データ取得失敗 */}
      {getRooms1fStatus === "failed" ||
        (getRooms2fStatus === "failed" && <Error />)}
    </main>
  );
};

export default FrontPage;
