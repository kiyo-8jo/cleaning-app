"use client";

import CreateForm from "@/app/components/create/CreateForm";

import { useAppSelector } from "@/app/lib/hooks/hooks";
import Changing from "@/app/components/create/Changing";
import Success from "@/app/components/create/Success";
import Error from "@/app/components/common/error/Error";

const CreatePage = () => {
  const { createRoomsStatus } = useAppSelector((state) => state.createRooms);

  return (
    <main className="flex h-[92vh] flex-col items-center justify-center bg-orange-100">
      {createRoomsStatus === "idle" && <CreateForm />}
      {createRoomsStatus === "pending" && <Changing />}
      {createRoomsStatus === "succeeded" && <Success />}
      {createRoomsStatus === "failed" && <Error />}
    </main>
  );
};

export default CreatePage;
