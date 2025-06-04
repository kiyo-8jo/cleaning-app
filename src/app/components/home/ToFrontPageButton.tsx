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
      className="mb-20 flex h-20 w-50 items-center justify-center rounded-2xl bg-blue-300 text-center text-xl font-bold sm:mb-0"
    >
      <Link href="/front" className="w-full leading-20">
        フロント用画面
      </Link>
    </div>
  );
};

export default ToFrontPageButton;
