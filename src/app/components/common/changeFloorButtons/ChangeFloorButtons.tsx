"use client";

import { setIs1fFalse, setIs1fTrue } from "@/app/lib/features/is1f/is1fSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/hooks";

const ChangeFloorButtons = () => {
  const dispatch = useAppDispatch();
  const { is1f } = useAppSelector((state) => state.is1f);
  console.log(is1f);
  return (
    <div className="flex items-center justify-center gap-50 h-[50px] mt-1">
      <div
        onClick={() => dispatch(setIs1fTrue())}
        className="bg-blue-200 px-5 py-2 text-center rounded-2xl cursor-pointer font-semibold"
      >
        1F
      </div>
      <div
        onClick={() => dispatch(setIs1fFalse())}
        className="bg-blue-200 px-5 py-2 text-center rounded-2xl cursor-pointer font-semibold"
      >
        2F
      </div>
    </div>
  );
};

export default ChangeFloorButtons;
