"use client";

import { setIs1fFalse, setIs1fTrue } from "@/app/lib/features/is1f/is1fSlice";
import { getRooms1f } from "@/app/lib/features/rooms1f/rooms1fSlice";
import { getRooms2f } from "@/app/lib/features/rooms2f/rooms2fSlice";
import { setTargetRoom } from "@/app/lib/features/targetRoom/targetRoomSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/hooks";
import { useEffect } from "react";

const ChangeFloorButtons = () => {
  const dispatch = useAppDispatch();
  const { is1f } = useAppSelector((state) => state.is1f);

  useEffect(() => {
    dispatch(setIs1fTrue());
    dispatch(getRooms1f());
    dispatch(getRooms2f());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center sm:gap-50 h-[50px] mt-1 gap-30">
      <div
        onClick={() => {
          dispatch(setIs1fTrue());
          dispatch(getRooms1f());
          dispatch(setTargetRoom({}));
        }}
        className={`${
          is1f && "border-2 pointer-events-none"
        } bg-blue-200 px-5 py-2 text-center rounded-2xl cursor-pointer font-semibold`}
      >
        1F
      </div>
      <div
        onClick={() => {
          dispatch(setIs1fFalse());
          dispatch(getRooms2f());
          dispatch(setTargetRoom({}));
        }}
        className={`${
          !is1f && "border-2 pointer-events-none"
        } bg-blue-200 px-5 py-2 text-center rounded-2xl cursor-pointer font-semibold`}
      >
        2F
      </div>
    </div>
  );
};

export default ChangeFloorButtons;
