import ToCreatePageButton from "@/app/components/home/ToCreatePageButton";
import ToFrontPageButton from "@/app/components/home/ToFrontPageButton";
import ToHousePageButton from "@/app/components/home/ToHousePageButton";

const page = () => {
  return (
    <div className="flex h-[92vh] flex-col items-center justify-center gap-20 bg-orange-100">
      <div className="items-center justify-center gap-20 sm:flex">
        <ToFrontPageButton />
        <ToHousePageButton />
      </div>
      <div className="flex h-20 w-50 items-center justify-center rounded-2xl bg-gray-300 text-center text-xl font-bold">
        <ToCreatePageButton />
      </div>
    </div>
  );
};

export default page;
