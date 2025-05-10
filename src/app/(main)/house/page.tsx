"use client";

import Fetching from "@/app/components/common/fetching/Fetching";
import Modal from "@/app/components/house/modal/Modal";
import HouseRoomCard from "@/app/components/house/roomCard/HouseRoomCard";
import { useAppSelector } from "@/app/lib/hooks/hooks";

const HousePage = () => {
  const { is1f } = useAppSelector((state) => state.is1f);
  const { rooms1f, getRooms1fStatus } = useAppSelector(
    (state) => state.rooms1f
  );
  const { rooms2f, getRooms2fStatus } = useAppSelector(
    (state) => state.rooms2f
  );

  const { isModalOpen } = useAppSelector((state) => state.isModalOpen);

  // is1Fの値によって表示する階を変更
  const floorRooms = is1f ? rooms1f : rooms2f;

  return (
    <main className="bg-blue-50 flex flex-wrap justify-center h-max mx-5 mt-1 mb-3 p-3 rounded-2xl">
      {/* データ取得成功 */}
      {getRooms1fStatus === "succeeded" &&
        getRooms2fStatus === "succeeded" &&
        floorRooms.map((room) => <HouseRoomCard room={room} key={room.id} />)}
        {/* モーダル表示 */}
      {isModalOpen && <Modal />}
      {/* ロード中 */}
      {(getRooms1fStatus === "pending" || getRooms2fStatus === "pending") && (
        <Fetching />
      )}
      {/* データ取得失敗 */}
      {getRooms1fStatus === "failed" ||
        (getRooms2fStatus === "failed" && <div>エラーが発生しました;</div>)}
    </main>
  );
};

export default HousePage;
