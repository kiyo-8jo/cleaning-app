"use client";

import { setTargetRoom } from "@/app/lib/features/targetRoom/targetRoomSlice";
import { useAppDispatch } from "@/app/lib/hooks/hooks";
import Link from "next/link";

const ToFrontPageButton = () => {
  const dispatch = useAppDispatch();
  //targetRoomをリセット
  const handleClick = () => {
    dispatch(setTargetRoom({}));
  };
  return (
    <div
      onClick={handleClick}
      className="bg-blue-300 flex justify-center items-center w-50 h-20 text-center rounded-2xl font-bold text-xl mb-20 sm:mb-0"
    >
      <Link href="/front" className="w-full leading-20">
        フロント用画面
      </Link>
    </div>
  );
};

export default ToFrontPageButton;
