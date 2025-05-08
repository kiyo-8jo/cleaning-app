"use client";

import { useAppSelector } from "@/app/lib/hooks/hooks";
import SideBar from "./SideBar";
import NoTargetRoomSidebar from "./NoTargetRoomSidebar";

const SideBarContainer = () => {
  const { targetRoom } = useAppSelector((state) => state.targetRoom);
  return (
    <div className="bg-gray-300 w-[450px] h-[620px] mr-5 p-3 rounded-2xl min-w-[300px] sticky top-9">
      {Object.keys(targetRoom).length !== 0 ? (
        <SideBar />
      ) : (
        <NoTargetRoomSidebar />
      )}
    </div>
  );
};

export default SideBarContainer;
