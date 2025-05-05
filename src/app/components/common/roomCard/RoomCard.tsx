import { RoomType } from "@/app/types/types";

interface RoomCardType {
  room: RoomType;
}

const RoomCard = ({ room }: RoomCardType) => {
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
  return (
    <div
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
      <div className="flex items-center justify-around h-[25%] w-full border-t-1 border-b-1 border-gray-500">
        <div>{room.isKeyBack.toString()}</div>
        <div>{room.isCleaningComplete.toString()}</div>
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

export default RoomCard;
