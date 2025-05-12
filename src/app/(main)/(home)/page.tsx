import ToCreatePageButton from "@/app/components/home/ToCreatePageButton";
import ToFrontPageButton from "@/app/components/home/ToFrontPageButton";
import ToHousePageButton from "@/app/components/home/ToHousePageButton";

const page = () => {
  return (
    <div className="bg-orange-100 h-[92vh] flex flex-col justify-center items-center gap-20">
      <div className="sm:flex items-center justify-center gap-20">
        <ToFrontPageButton />
        <ToHousePageButton />
      </div>
      <div className="bg-gray-300 flex justify-center items-center w-50 h-20 text-center rounded-2xl font-bold text-xl">
        <ToCreatePageButton />
      </div>
    </div>
  );
};

export default page;
