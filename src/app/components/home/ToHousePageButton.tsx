"use client";

import { setTargetRoom } from "@/app/lib/features/targetRoom/targetRoomSlice";
import { useAppDispatch } from "@/app/lib/hooks/hooks";
import Link from "next/link";

const ToHousePageButton = () => {
  const dispatch = useAppDispatch();
  //targetRoomをリセット
  const handleClick = () => {
    dispatch(setTargetRoom({}));
  };
  return (
    <div
      onClick={handleClick}
      className="bg-yellow-300 flex justify-center items-center w-50 h-20 text-center rounded-2xl font-bold text-xl"
    >
      <Link href="/house" className="w-full leading-20">
        ハウス用画面
      </Link>
    </div>
  );
};

export default ToHousePageButton;
