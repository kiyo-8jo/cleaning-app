"use client";

import RoomCard from "@/app/components/common/roomCard/RoomCard";
import { RoomType } from "@/app/types/types";
import { useEffect, useState } from "react";

const FrontPage = () => {
  const [rooms_1f, setRooms_1f] = useState<RoomType[]>([]);
  // const [rooms_2f, setRooms_2f] = useState<RoomType[]>([]);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_URL;
    const getRooms_1f = async () => {
      const res = await fetch(`${url}/api/getRooms/1f`, {
        cache: "no-store",
      });
      const data = await res.json();
      setRooms_1f(data.rooms_1f);
    };
    // const getRooms_2f = async () => {
    //   const res = await fetch("http://localhost:3000/api/getRooms/2f", {
    //     cache: "no-store",
    //   });
    //   const data = await res.json();
    //   setRooms_2f(data.rooms_2f);
    // };
    getRooms_1f();
    // getRooms_2f();
  }, []);

  return (
    <div className="bg-blue-50 flex flex-wrap justify-center h-full w-[75%] ml-5 mb-3 p-3 rounded-2xl">
      {rooms_1f.map((room) => (
        <RoomCard room={room} key={room.id} />
      ))}
    </div>
  );
};

export default FrontPage;
