"use client";

import { setTargetRoom } from "@/app/lib/features/targetRoom/targetRoomSlice";
import { useAppDispatch } from "@/app/lib/hooks/hooks";
import Link from "next/link";

const ToCreatePageButton = () => {
  const dispatch = useAppDispatch();
  //targetRoomをリセット
  const handleClick = () => {
    dispatch(setTargetRoom({}));
  };
  return (
    <Link onClick={handleClick} href="/create" className="w-full leading-20">
      作成用画面
    </Link>
  );
};

export default ToCreatePageButton;
