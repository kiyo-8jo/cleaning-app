"use client";

import { setIsModalOpen } from "@/app/lib/features/modal/modalSlice";
import { setTargetRoom } from "@/app/lib/features/targetRoom/targetRoomSlice";
import { useAppSelector } from "@/app/lib/hooks/hooks";
import type { RoomType } from "@/app/types/types";
import { TbCircleKeyFilled } from "react-icons/tb";
import { TbCircleCheckFilled } from "react-icons/tb";
import { RiStopCircleFill } from "react-icons/ri";
import { useDispatch } from "react-redux";

interface RoomCardType {
  room: RoomType;
}

const HouseRoomCard = ({ room }: RoomCardType) => {
  const dispatch = useDispatch();
  const { is1f } = useAppSelector((state) => state.is1f);
  const { rooms1f } = useAppSelector((state) => state.rooms1f);
  const { rooms2f } = useAppSelector((state) => state.rooms2f);

  // カードの背景色を取得
  const getBgColor = (cleaningType: string, stayCleaningType: string) => {
    if (cleaningType === "IN") return "bg-blue-200";
    if (cleaningType === "OUT") return "bg-red-200";
    if (cleaningType === "OUT-IN") return "bg-purple-300";
    if (cleaningType === "NONE") return "bg-gray-400";
    if (cleaningType === "STAY" && stayCleaningType === "NORMAL")
      return "bg-yellow-200";
    if (cleaningType === "STAY" && stayCleaningType === "ECO")
      return "bg-green-200";
  };

  const handleClick = () => {
    dispatch(setTargetRoom({ room, is1f, rooms1f, rooms2f }));
    dispatch(setIsModalOpen());
  };

  return (
    <div
      onClick={handleClick}
      className={`${getBgColor(
        room.cleaningType,
        room.stayCleaningType,
      )} m-1 flex h-[160px] w-[225px] cursor-pointer flex-col rounded-2xl p-2`}
    >
      <div className="mb-1 flex h-[15%] w-full items-center justify-between px-1 font-bold">
        <div>
          {room.id}({room.roomType})
        </div>
        <div>{room.cleaningType}</div>
      </div>
      <div className="flex h-[25%] w-full items-center justify-center gap-3 border-t-1 border-b-1 border-gray-500">
        {room.isKeyBack && (
          <div className="text-2xl text-yellow-800">
            <TbCircleKeyFilled />
          </div>
        )}
        {room.isWaitingCheck && !room.isCleaningComplete && (
          <div className="text-2xl text-gray-800">
            <RiStopCircleFill />
          </div>
        )}
        {room.isWaitingCheck && room.isCleaningComplete && (
          <div className="text-2xl text-blue-800">
            <TbCircleCheckFilled />
          </div>
        )}
      </div>
      <div className="mt-1 flex h-[60%] w-full text-sm">
        <div className="flex w-1/2 flex-col gap-1">
          <div className="flex w-full flex-col items-center">
            <p className="font-bold">Beds</p>
            <p>
              {room.nowBeds}→{room.newBeds}
            </p>
          </div>
          <div className="flex w-full flex-col items-center">
            <p className="font-bold">Guests</p>
            <p>
              {room.adult}/{room.inf}/{room.kidInf}
            </p>
          </div>
        </div>
        <div className="flex w-1/2 flex-col items-center">
          <p className="font-bold">Memo</p>
          <p className="h-ful hidden-scrollbar w-full overflow-y-scroll p-1 text-center text-xs wrap-break-word select-none">
            {room.memo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HouseRoomCard;
