import RoomCard from "@/app/components/common/roomCard/RoomCard";
import { testRooms } from "../../../../testRooms";

const FrontPage = () => {
  return (
    <div className="bg-blue-50 flex flex-wrap justify-center h-full w-[75%] ml-5 mb-3 p-3 rounded-2xl">
      {testRooms.map((room) => (
        <RoomCard room={room} key={room.id}/>
      ))}
    </div>
  );
};

export default FrontPage;
