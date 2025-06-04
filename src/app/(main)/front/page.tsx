"use client";

import Error from "@/app/components/common/error/Error";
import Fetching from "@/app/components/common/fetching/Fetching";
import FrontRoomCard from "@/app/components/front/roomCard/FrontRoomCard";
import { useAppSelector } from "@/app/lib/hooks/hooks";

const FrontPage = () => {
  const { is1f } = useAppSelector((state) => state.is1f);
  const { rooms1f, getRooms1fStatus } = useAppSelector(
    (state) => state.rooms1f,
  );
  const { rooms2f, getRooms2fStatus } = useAppSelector(
    (state) => state.rooms2f,
  );

  // is1Fの値によって表示する階を変更
  const floorRooms = is1f ? rooms1f : rooms2f;

  return (
    <main className="mb-3 ml-5 flex h-full w-[75%] flex-wrap justify-center rounded-2xl bg-blue-50 p-3">
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
