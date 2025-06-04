"use client";

import { useAppSelector } from "@/app/lib/hooks/hooks";
import SideBar from "./SideBar";
import NoTargetRoomSidebar from "./NoTargetRoomSidebar";

const SideBarContainer = () => {
  const { targetRoom } = useAppSelector((state) => state.targetRoom);
  return (
    <div className="sticky top-9 mr-5 h-[620px] w-[450px] min-w-[300px] rounded-2xl bg-gray-300 p-3">
      {Object.keys(targetRoom).length !== 0 ? (
        <SideBar />
      ) : (
        <NoTargetRoomSidebar />
      )}
    </div>
  );
};

export default SideBarContainer;
