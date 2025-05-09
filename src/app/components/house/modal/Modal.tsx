"use client";

import { setIsModalClose } from "@/app/lib/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/hooks";

const Modal = () => {
  const dispatch = useAppDispatch();
  const { targetRoom } = useAppSelector((state) => state.targetRoom);
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 right-0 bottom-0 bg-gray-300/50 ">
      <form className="bg-gray-400 w-fit h-fit relative left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-5 flex flex-col items-center gap-10 rounded-2xl">
        <h2 className="text-2xl font-bold">{targetRoom.id}の清掃状況</h2>
        <div className="flex flex-col gap-10">
          <div className="flex gap-3">
            <label htmlFor="is_waiting_check" className="mr-8">
              チェック待ち
            </label>
            <input type="radio" name="is_waiting_check" value="true" />
            true
            <input type="radio" name="is_waiting_check" value="false" />
            false
          </div>
          <div className="flex gap-3">
            <label htmlFor="is_cleaning_complete" className="mr-8">
              チェック完了
            </label>
            <input type="radio" name="is_cleaning_complete" value="true" />
            true
            <input type="radio" name="is_cleaning_complete" value="false" />
            false
          </div>
        </div>
        <div className="flex items-center gap-8">
          <button
            onClick={() => dispatch(setIsModalClose())}
            className="cursor-pointer bg-blue-600 text-white p-2 rounded-2xl"
          >
            変更する
          </button>
          <div
            onClick={() => dispatch(setIsModalClose())}
            className="cursor-pointer bg-blue-600 text-white p-2 rounded-2xl"
          >
            キャンセル
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
