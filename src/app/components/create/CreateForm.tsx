"use client";

import {
  createNewRooms,
  setNewRooms1f,
  setNewRooms2f,
} from "@/app/lib/features/createRooms/createRoomsSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/hooks";
import { RoomType } from "@/app/types/types";
import * as XLSX from "xlsx";

const CreateForm = () => {
  const dispatch = useAppDispatch();
  const { newRooms1f, newRooms2f } = useAppSelector(
    (state) => state.createRooms
  );
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    floor: string
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
    // データ更新用APIをたたく
    await dispatch(createNewRooms({ newRooms1f, newRooms2f }));
  };
  return (
    <main>
      <form onSubmit={handleSubmit} className="flex flex-col gap-30 ">
        <div className="flex gap-30">
          <div className="bg-yellow-600 flex flex-col justify-center w-[350px] p-5 rounded-xl">
            <label
              htmlFor="1f_date"
              className="flex justify-center mb-5 text-xl font-medium"
            >
              1Fのデータを選択
            </label>
            <input
              id="1f_date"
              name="1f_date"
              type="file"
              accept=".xlsx"
              onChange={(e) => handleChange(e, "1f")}
              className="file:mr-4 file:rounded-full file:bg-gray-50 file:p-3 file:text-sm file:font-semibold cursor-pointer file:cursor-pointer"
            />
          </div>
          <div className="bg-yellow-600 flex flex-col justify-center w-[350px] p-5 rounded-2xl">
            <label
              htmlFor="2f_date"
              className="flex justify-center mb-5 text-xl font-medium"
            >
              2Fのデータを選択
            </label>
            <input
              type="file"
              id="2f_date"
              name="2f_date"
              accept=".xlsx"
              onChange={(e) => handleChange(e, "2f")}
              className="file:mr-4 file:rounded-full file:bg-gray-50 file:p-3 file:text-sm file:font-semibold cursor-pointer file:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[120px] bg-red-300 rounded-2xl p-3 text-xl font-medium cursor-pointer"
          >
            作成する
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateForm;
