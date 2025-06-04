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
      className="flex h-20 w-50 items-center justify-center rounded-2xl bg-yellow-300 text-center text-xl font-bold"
    >
      <Link href="/house" className="w-full leading-20">
        ハウス用画面
      </Link>
    </div>
  );
};

export default ToHousePageButton;
