"use client";

import { setTargetRoom } from "@/app/lib/features/targetRoom/targetRoomSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/hooks";
import {
  bedsOptions,
  cleaningTypeOptions,
  createObjOptions,
  createOptions,
  getBoolean,
  guestOptions,
  objOptions,
  stayCleaningTypeOptions,
} from "./options";
import type { FormEventHandler } from "react";
import type { RoomType } from "@/app/types/types";
import {
  editRoom1f,
  getRooms1f,
} from "@/app/lib/features/rooms1f/rooms1fSlice";
import {
  editRoom2f,
  getRooms2f,
} from "@/app/lib/features/rooms2f/rooms2fSlice";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const { targetRoom } = useAppSelector((state) => state.targetRoom);
  const { is1f } = useAppSelector((state) => state.is1f);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // フォームから値を取得し、新しい部屋データを作成
    const form = new FormData(e.currentTarget);

    const newRoomDate: RoomType = {
      id: targetRoom.id,
      roomType: targetRoom.roomType,
      cleaningType: String(form.get("cleaning_type")),
      stayCleaningType: String(form.get("stay_cleaning_type")),
      isKeyBack: getBoolean(form.get("is_key_back")!),
      isCleaningComplete: getBoolean(form.get("is_cleaning_complete")!),
      nowBeds: Number(form.get("now_beds")),
      newBeds: Number(form.get("new_beds")),
      adult: Number(form.get("adult")),
      inf: Number(form.get("inf")),
      kidInf: Number(form.get("kid_inf")),
      memo: form.get("memo") as string,
      isWaitingCheck: false,
    };

    // バリデーション
    if (
      newRoomDate.cleaningType === "STAY" &&
      newRoomDate.stayCleaningType === "NOT-SELECT"
    ) {
      alert("連泊清掃方法が選択されていません");
      return;
    }
    if (
      newRoomDate.cleaningType !== "STAY" &&
      newRoomDate.stayCleaningType !== "NOT-SELECT"
    ) {
      alert("連泊でないのに連泊清掃方法が選択されています");
      return;
    }

    // 現在指定している階に応じて正しい変更用関数を使用する
    const setEditFunction = is1f ? editRoom1f : editRoom2f;
    // 現在指定している階に応じて正しい取得用関数を使用する
    const getFunction = is1f ? getRooms1f : getRooms2f;
    // 指定している階のDBのデータを変更
    await dispatch(setEditFunction({ newRoomDate }));
    // targetRoomのリセット
    dispatch(setTargetRoom({}));
    // 指定している階のデータを取得
    await dispatch(getFunction());
  };

  return (
    <div>
      {/* タイトル */}
      <h2 className="my-5 text-center text-2xl font-bold">
        {targetRoom.id}の編集
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex w-full flex-col">
          {/* 清掃方法 */}
          <div className="mb-3 flex w-full items-center">
            <label htmlFor="cleaning_type" className="w-1/2">
              清掃方法
            </label>
            <select
              name="cleaning_type"
              id="cleaning_type"
              defaultValue={targetRoom.cleaningType}
              key={targetRoom.cleaningType}
              className="w-1/2 rounded-md bg-white p-1 text-sm"
            >
              {createOptions(cleaningTypeOptions)}
            </select>
          </div>
          {/* 連泊清掃方法 */}
          <div className="mb-3 flex w-full items-center">
            <label htmlFor="stay_cleaning_type" className="text-s w-1/2">
              連泊清掃方法
            </label>
            <select
              name="stay_cleaning_type"
              id="stay_cleaning_type"
              defaultValue={targetRoom.stayCleaningType}
              key={targetRoom.stayCleaningType}
              className="w-1/2 rounded-md bg-white p-1 text-sm"
            >
              {createOptions(stayCleaningTypeOptions)}
            </select>
          </div>
          {/* 鍵の返却 */}
          <div className="mb-3 flex w-full items-center">
            <label htmlFor="is_key_back" className="w-1/2">
              鍵の返却
            </label>
            <select
              name="is_key_back"
              id="is_key_back"
              defaultValue={Number(targetRoom.isKeyBack)}
              key={Number(targetRoom.isKeyBack)}
              className="w-1/2 rounded-md bg-white p-1 text-sm"
            >
              {createObjOptions(objOptions)}
            </select>
          </div>
          {/* 清掃完了 */}
          <div className="mb-3 flex w-full items-center">
            <label htmlFor="is_cleaning_complete" className="w-1/2">
              清掃完了
            </label>
            <select
              name="is_cleaning_complete"
              id="is_cleaning_complete"
              defaultValue={Number(targetRoom.isCleaningComplete)}
              key={Number(targetRoom.isCleaningComplete)}
              className="w-1/2 rounded-md bg-white p-1 text-sm"
            >
              {createObjOptions(objOptions)}
            </select>
          </div>

          {/* 現在のベッド数 */}
          <div className="mb-3 flex w-full items-center">
            <label htmlFor="now_beds" className="w-1/2">
              現在のベッド数
            </label>
            <select
              name="now_beds"
              id="now_beds"
              defaultValue={targetRoom.nowBeds}
              key={targetRoom.nowBeds}
              className="w-1/2 rounded-md bg-white p-1 text-sm"
            >
              {createOptions(bedsOptions)}
            </select>
          </div>
          {/* 変更後のベッド数 */}
          <div className="mb-3 flex w-full items-center">
            <label htmlFor="new_beds" className="w-1/2">
              変更後のベッド数
            </label>
            <select
              name="new_beds"
              id="new_beds"
              defaultValue={targetRoom.newBeds}
              key={targetRoom.newBeds}
              className="w-1/2 rounded-md bg-white p-1 text-sm"
            >
              {createOptions(bedsOptions)}
            </select>
          </div>
          {/* 大人の人数 */}
          <div className="mb-3 flex w-full items-center">
            <label htmlFor="adult" className="w-1/2">
              大人
            </label>
            <select
              name="adult"
              id="adult"
              defaultValue={targetRoom.adult}
              key={targetRoom.adult}
              className="w-1/2 rounded-md bg-white p-1 text-sm"
            >
              {createOptions(guestOptions)}
            </select>
          </div>
          {/* 添い寝の人数 */}
          <div className="mb-3 flex w-full items-center">
            <label htmlFor="inf" className="w-1/2">
              添寝
            </label>
            <select
              name="inf"
              id="inf"
              defaultValue={targetRoom.inf}
              key={targetRoom.inf}
              className="w-1/2 rounded-md bg-white p-1 text-sm"
            >
              {createOptions(guestOptions)}
            </select>
          </div>
          {/* 子供添寝の人数 */}
          <div className="mb-3 flex w-full items-center">
            <label htmlFor="kid_inf" className="w-1/2">
              子供添寝
            </label>
            <select
              name="kid_inf"
              id="kid_inf"
              defaultValue={targetRoom.kidInf}
              key={targetRoom.kidInf}
              className="w-1/2 rounded-md bg-white p-1 text-sm"
            >
              {createOptions(guestOptions)}
            </select>
          </div>
          {/* メモ */}
          <div className="mb-3 flex w-full items-center">
            <label htmlFor="memo" className="flex w-1/2 items-center">
              メモ
            </label>
            <textarea
              name="memo"
              id="memo"
              defaultValue={targetRoom.memo}
              key={targetRoom.memo}
              className="font-sm h-[100px] w-1/2 resize-none rounded-md bg-white p-1"
            ></textarea>
          </div>
        </div>
        <div className="my-5 flex items-center justify-center gap-15">
          <button
            type="submit"
            className="w-[100px] cursor-pointer rounded-2xl bg-yellow-100 py-1 text-center font-semibold"
          >
            変更する
          </button>
          <div
            onClick={() => dispatch(setTargetRoom({}))}
            className="w-[100px] cursor-pointer rounded-2xl bg-yellow-100 py-1 text-center font-semibold"
          >
            キャンセル
          </div>
        </div>
      </form>
    </div>
  );
};

export default SideBar;
