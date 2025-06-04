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
    <div className="mt-1 flex h-[50px] items-center justify-center gap-30 sm:gap-50">
      <div
        onClick={() => {
          dispatch(setIs1fTrue());
          dispatch(getRooms1f());
          dispatch(setTargetRoom({}));
        }}
        className={`${
          is1f && "pointer-events-none border-2"
        } cursor-pointer rounded-2xl bg-blue-200 px-5 py-2 text-center font-semibold`}
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
          !is1f && "pointer-events-none border-2"
        } cursor-pointer rounded-2xl bg-blue-200 px-5 py-2 text-center font-semibold`}
      >
        2F
      </div>
    </div>
  );
};

export default ChangeFloorButtons;
