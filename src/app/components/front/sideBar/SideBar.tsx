"use client";

import { setTargetRoom } from "@/app/lib/features/targetRoom/targetRoomSlice";
import { useAppSelector } from "@/app/lib/hooks/hooks";
import { useDispatch } from "react-redux";

const SideBar = () => {
  const dispatch = useDispatch();
  const { targetRoom } = useAppSelector((state) => state.targetRoom);

  return (
    <div>
      {/* タイトル */}
      <h2 className="my-5 text-center font-bold text-2xl">
        {targetRoom.id}の編集
      </h2>
      <form>
        <div className="w-full flex flex-col">
          {/* 清掃方法 */}
          <div className="w-full flex items-center mb-3">
            <label htmlFor="cleaning_type" className="w-1/2">
              清掃方法
            </label>
            <select
              name="cleaning_type"
              id="cleaning_type"
              defaultValue={targetRoom.cleaningType}
              key={targetRoom.cleaningType}
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="OUT">OUT</option>
              <option value="IN">IN</option>
              <option value="OUT-IN">OUT-IN</option>
              <option value="STAY">STAY</option>
              <option value="NONE">NONE</option>
            </select>
          </div>
          {/* 連泊清掃方法 */}
          <div className="w-full flex items-center mb-3">
            <label htmlFor="cleaning_type" className="w-1/2 text-s">
              連泊清掃方法
            </label>
            <select
              name="stay_cleaning_type"
              id="stay_cleaning_type"
              defaultValue={targetRoom.stayCleaningType}
              key={targetRoom.stayCleaningType}
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="NORMAL">NORMAL</option>
              <option value="ECO">ECO</option>
              <option value="NOT-SELECTt">NOT-SELECT</option>
            </select>
          </div>
          {/* 鍵の返却 */}
          <div className="w-full flex items-center mb-3">
            <label htmlFor="is_key_back" className="w-1/2">
              鍵の返却
            </label>
            <select
              name="is_key_back"
              id="is_key_back"
              defaultValue={Number(targetRoom.isKeyBack)}
              key={Number(targetRoom.isKeyBack)}
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="0">FALSE</option>
              <option value="1">TRUE</option>
            </select>
          </div>
          {/* 現在のベッド数 */}
          <div className="w-full flex items-center mb-3">
            <label htmlFor="now_beds" className="w-1/2">
              現在のベッド数
            </label>
            <select
              name="now_beds"
              id="now_beds"
              defaultValue={targetRoom.nowBeds}
              key={targetRoom.nowBeds}
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {/* 変更後のベッド数 */}
          <div className="w-full flex items-center mb-3">
            <label htmlFor="new_beds" className="w-1/2">
              変更後のベッド数
            </label>
            <select
              name="new_beds"
              id="new_beds"
              defaultValue={targetRoom.newBeds}
              key={targetRoom.newBeds}
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {/* 大人の人数 */}
          <div className="w-full flex items-center mb-3">
            <label htmlFor="adult" className="w-1/2">
              大人
            </label>
            <select
              name="adult"
              id="adult"
              defaultValue={targetRoom.adult}
              key={targetRoom.adult}
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {/* 添い寝の人数 */}
          <div className="w-full flex items-center mb-3">
            <label htmlFor="inf" className="w-1/2">
              添寝
            </label>
            <select
              name="inf"
              id="inf"
              defaultValue={targetRoom.inf}
              key={targetRoom.inf}
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {/* 子供添寝の人数 */}
          <div className="w-full flex items-center mb-3">
            <label htmlFor="kid_inf" className="w-1/2">
              子供添寝
            </label>
            <select
              name="kid_inf"
              id="kid_inf"
              defaultValue={targetRoom.kidInf}
              key={targetRoom.kidInf}
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {/* 清掃完了 */}
          <div className="w-full flex items-center mb-3">
            <label htmlFor="is_cleaning_complete" className="w-1/2">
              清掃完了
            </label>
            <select
              name="is_cleaning_complete"
              id="is_cleaning_complete"
              defaultValue={Number(targetRoom.isCleaningComplete)}
              key={Number(targetRoom.isCleaningComplete)}
              className="w-1/2 bg-white rounded-md p-1 text-sm"
            >
              <option value="0">FALSE</option>
              <option value="1">TRUE</option>
            </select>
          </div>
          {/* メモ */}
          <div className="w-full flex items-center mb-3">
            <label htmlFor="memo" className="flex w-1/2 items-center">
              メモ
            </label>
            <textarea
              name="memo"
              id="memo"
              defaultValue={targetRoom.memo}
              className="w-1/2 bg-white font-sm resize-none h-[100px] rounded-md p-1"
            ></textarea>
          </div>
        </div>
        <div className="flex my-5 items-center justify-center gap-15">
          <div
            onClick={() => dispatch(setTargetRoom({}))}
            className="bg-yellow-100 w-[100px] py-1 rounded-2xl text-center font-semibold cursor-pointer"
          >
            変更する
          </div>
          <div
            onClick={() => dispatch(setTargetRoom({}))}
            className="bg-yellow-100 w-[100px] py-1 rounded-2xl text-center font-semibold cursor-pointer"
          >
            キャンセル
          </div>
        </div>
      </form>
    </div>
  );
};

export default SideBar;
