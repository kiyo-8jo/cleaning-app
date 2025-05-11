"use client";

import CreateForm from "@/app/components/create/CreateForm";

import { useAppSelector } from "@/app/lib/hooks/hooks";
import Changing from "@/app/components/create/Changing";
import Success from "@/app/components/create/Success";

const CreatePage = () => {
  const { createRoomsStatus } = useAppSelector((state) => state.createRooms);

  return (
    <main className="bg-orange-100 h-[95vh] flex flex-col justify-center items-center">
      {createRoomsStatus === "idle" && <CreateForm />}
      {createRoomsStatus === "pending" && <Changing />}
      {createRoomsStatus === "succeeded" && <Success />}
      {createRoomsStatus === "failed" && <div>エラーが発生しました;</div>}
    </main>
  );
};

export default CreatePage;
