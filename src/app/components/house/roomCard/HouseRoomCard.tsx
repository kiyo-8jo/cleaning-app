"use client";

import { setIsModalOpen } from "@/app/lib/features/modal/modalSlice";
import { setTargetRoom } from "@/app/lib/features/targetRoom/targetRoomSlice";
import { useAppSelector } from "@/app/lib/hooks/hooks";
import { RoomType } from "@/app/types/types";
import { TbCircleKeyFilled } from "react-icons/tb";
import { TbCircleCheckFilled } from "react-icons/tb";
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
        room.stayCleaningType
      )}  flex flex-col w-[225px] h-[160px] rounded-2xl p-2 cursor-pointer m-1`}
    >
      <div className="flex items-center justify-between h-[15%] w-full px-1 mb-1 font-bold">
        <div>
          {room.id}({room.roomType})
        </div>
        <div>{room.cleaningType}</div>
      </div>
      <div className="flex items-center justify-center h-[25%] w-full border-t-1 border-b-1 border-gray-500 gap-3">
        <div className="text-2xl text-yellow-800">
          {room.isKeyBack && <TbCircleKeyFilled />}
        </div>
        <div className="text-2xl text-blue-800">
          {room.isCleaningComplete && <TbCircleCheckFilled />}
        </div>
      </div>
      <div className="flex h-[60%] w-full mt-1 text-sm">
        <div className="flex flex-col w-1/2 gap-1">
          <div className="flex flex-col w-full items-center">
            <p className="font-bold">Beds</p>
            <p>
              {room.nowBeds}→{room.newBeds}
            </p>
          </div>
          <div className="flex flex-col w-full items-center">
            <p className="font-bold">Guests</p>
            <p>
              {room.adult}/{room.inf}/{room.kidInf}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <p className="font-bold">Memo</p>
          <p className="w-full h-ful wrap-break-word overflow-y-scroll hidden-scrollbar select-none text-xs p-1 text-center">
            {room.memo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HouseRoomCard;
