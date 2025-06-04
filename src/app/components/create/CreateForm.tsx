"use client";

import {
  createNewRooms,
  setNewRooms1f,
  setNewRooms2f,
} from "@/app/lib/features/createRooms/createRoomsSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/hooks";
import type { RoomType } from "@/app/types/types";
import * as XLSX from "xlsx";

const CreateForm = () => {
  const dispatch = useAppDispatch();
  const { newRooms1f, newRooms2f } = useAppSelector(
    (state) => state.createRooms,
  );
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    floor: string,
  ) => {
    // Excelデータの抽出とデータセット
    if (e.target.files?.length) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(e.target.files![0]);
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const data = e.target!.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parseData: RoomType[] | null = XLSX.utils.sheet_to_json(sheet);
        const setFunction = floor === "1f" ? setNewRooms1f : setNewRooms2f;
        dispatch(setFunction(parseData));
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // バリデーション
    if (newRooms1f?.length === 0 || newRooms2f?.length === 0) {
      alert("データが選択されていません");
      return;
    }
    // データ更新用APIをたたく
    await dispatch(createNewRooms({ newRooms1f, newRooms2f }));
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:gap-30">
      <div className="gap-30 sm:flex">
        <div className="flex w-[300px] flex-col justify-center rounded-xl bg-yellow-600 p-5 sm:w-[350px]">
          <label
            htmlFor="1f_date"
            className="mb-5 flex justify-center text-xl font-medium"
          >
            1Fのデータを選択
          </label>
          <input
            id="1f_date"
            name="1f_date"
            type="file"
            accept=".xlsx"
            onChange={(e) => handleChange(e, "1f")}
            className="cursor-pointer file:mr-4 file:cursor-pointer file:rounded-full file:bg-gray-50 file:p-3 file:text-sm file:font-semibold"
          />
        </div>
        <div className="my-10 flex w-[300px] flex-col justify-center rounded-2xl bg-yellow-600 p-5 sm:my-0 sm:w-[350px]">
          <label
            htmlFor="2f_date"
            className="mb-5 flex justify-center text-xl font-medium"
          >
            2Fのデータを選択
          </label>
          <input
            type="file"
            id="2f_date"
            name="2f_date"
            accept=".xlsx"
            onChange={(e) => handleChange(e, "2f")}
            className="cursor-pointer file:mr-4 file:cursor-pointer file:rounded-full file:bg-gray-50 file:p-3 file:text-sm file:font-semibold"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-[120px] cursor-pointer rounded-2xl bg-red-300 p-3 text-xl font-medium"
        >
          作成する
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
