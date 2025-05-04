const RoomCard = () => {
  return (
    <div className="bg-blue-200 flex flex-col w-[225px] h-[160px] rounded-2xl p-2 cursor-pointer m-1">
      <div className="flex items-center justify-between h-[15%] w-full px-1 mb-1 font-bold">
        <div>221(OTP)</div>
        <div>IN</div>
      </div>
      <div className="flex items-center justify-around h-[25%] w-full border-t-1 border-b-1 border-gray-500">
        <div>Icon</div>
        <div>Icon</div>
      </div>
      <div className="flex h-[60%] w-full mt-1 text-sm">
        <div className="flex flex-col w-1/2 gap-1">
          <div className="flex flex-col w-full items-center">
            <p className="font-bold">Beds</p>
            <p>3→3</p>
          </div>
          <div className="flex flex-col w-full items-center">
            <p className="font-bold">Guests</p>
            <p>3/0/0</p>
          </div>
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <p className="font-bold">Memo</p>
          <p className="w-full h-ful wrap-break-word overflow-y-scroll hidden-scrollbar select-none text-xs p-1 text-center">
            加湿器入れる
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
