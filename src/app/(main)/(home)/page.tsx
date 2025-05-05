import Link from "next/link";

const page = () => {
  return (
    <div className="bg-orange-100 h-[95vh] flex flex-col justify-center items-center gap-20">
      <div className="flex items-center justify-center gap-20">
        <div className="bg-blue-300 flex justify-center items-center w-50 h-20 text-center rounded-2xl font-bold text-xl">
          <Link href="/front" className="w-full leading-20">
            フロント用画面
          </Link>
        </div>
        <div className="bg-yellow-300 flex justify-center items-center w-50 h-20 text-center rounded-2xl font-bold text-xl">
          <Link href="/house" className="w-full leading-20">ハウス用画面</Link>
        </div>
      </div>
      <div className="bg-gray-300 flex justify-center items-center w-50 h-20 text-center rounded-2xl font-bold text-xl">
        <Link href="/create" className="w-full leading-20">作成用画面</Link>
      </div>
    </div>
  );
};

export default page;
