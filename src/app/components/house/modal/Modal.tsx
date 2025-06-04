"use client";

import { setIsCleaningComplete } from "@/app/lib/features/isCleaningComplete/isCleaningCompleteSlice";
import { setIsWaitingCheck } from "@/app/lib/features/isWaitingCheck/isWaitingCheckSlice";
import { setIsModalClose } from "@/app/lib/features/modal/modalSlice";
import {
  editRoom1f,
  getRooms1f,
} from "@/app/lib/features/rooms1f/rooms1fSlice";
import {
  editRoom2f,
  getRooms2f,
} from "@/app/lib/features/rooms2f/rooms2fSlice";
import { setTargetRoom } from "@/app/lib/features/targetRoom/targetRoomSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/hooks";
import type { RoomType } from "@/app/types/types";
import type { FormEventHandler} from "react";
import { useEffect } from "react";

const Modal = () => {
  const dispatch = useAppDispatch();
  const { targetRoom } = useAppSelector((state) => state.targetRoom);
  const { is1f } = useAppSelector((state) => state.is1f);
  const { isWaitingCheck } = useAppSelector((state) => state.isWaitingCheck);
  const { isCleaningComplete } = useAppSelector(
    (state) => state.isCleaningComplete,
  );

  // targetRoomに応じて初期化
  useEffect(() => {
    dispatch(setIsCleaningComplete(targetRoom.isCleaningComplete));
    dispatch(setIsWaitingCheck(targetRoom.isWaitingCheck));
  }, [dispatch, targetRoom.isCleaningComplete, targetRoom.isWaitingCheck]);

  // submit用関数
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // バリデーション
    if (!isWaitingCheck && isCleaningComplete) {
      alert("チェック待ちになっていません");
      return;
    }

    const newRoomDate = {
      ...(targetRoom as RoomType),
      isWaitingCheck,
      isCleaningComplete,
    };

    // 現在指定している階に応じて正しい変更用関数を使用する
    const setEditFunction = is1f ? editRoom1f : editRoom2f;
    // 現在指定している階に応じて正しい取得用関数を使用する
    const getFunction = is1f ? getRooms1f : getRooms2f;
    // 指定している階のDBのデータを変更
    await dispatch(setEditFunction({ newRoomDate }));
    // modalを閉じる
    dispatch(setIsModalClose());
    // targetRoomのリセット
    dispatch(setTargetRoom({}));
    // 指定している階のデータを取得
    await dispatch(getFunction());
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 h-[100vh] w-full bg-gray-300/50">
      <form
        onSubmit={handleSubmit}
        className="relative top-[50%] left-[50%] flex h-fit w-fit translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-10 rounded-2xl bg-gray-400 p-5"
      >
        <h2 className="text-2xl font-bold">{targetRoom.id}の清掃状況</h2>
        <div className="flex flex-col gap-10">
          <div className="flex gap-3">
            <label htmlFor="is_waiting_check" className="mr-8">
              チェック待ち
            </label>
            <label className="mr-3 flex gap-2">
              <input
                type="radio"
                name="is_waiting_check"
                value="true"
                checked={isWaitingCheck}
                onChange={() => dispatch(setIsWaitingCheck(true))}
              />
              true
            </label>
            <label className="flex gap-2">
              <input
                type="radio"
                name="is_waiting_check"
                value="false"
                checked={!isWaitingCheck}
                onChange={() => dispatch(setIsWaitingCheck(false))}
              />
              false
            </label>
          </div>
          <div className="flex gap-3">
            <label htmlFor="is_cleaning_complete" className="mr-8">
              チェック完了
            </label>
            <label className="mr-3 flex gap-2">
              <input
                type="radio"
                name="is_cleaning_complete"
                value="true"
                checked={isCleaningComplete}
                onChange={() => dispatch(setIsCleaningComplete(true))}
              />
              true
            </label>
            <label className="flex gap-2">
              <input
                type="radio"
                name="is_cleaning_complete"
                value="false"
                checked={!isCleaningComplete}
                onChange={() => dispatch(setIsCleaningComplete(false))}
              />
              false
            </label>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <button className="w-[100px] cursor-pointer rounded-2xl bg-blue-600 p-2 text-white">
            変更する
          </button>
          <div
            onClick={() => dispatch(setIsModalClose())}
            className="w-[100px] cursor-pointer rounded-2xl bg-blue-600 p-2 text-white"
          >
            キャンセル
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
