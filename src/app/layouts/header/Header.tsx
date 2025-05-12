import DisplayCurrentPage from "@/app/components/header/DisplayCurrentPage";
import LogoutButton from "@/app/components/header/LogoutButton";
import Today from "@/app/components/header/Today";
import ToHomePageButton from "@/app/components/header/ToHomePageButton";

const Header = () => {
  return (
    <div className="bg-red-100 flex items-center h-[8vh]">
      <div className="flex flex-1/3 justify-center font-bold">
        <Today />
      </div>
      <div className="flex flex-1/3 justify-center font-bold text-xl">
        <DisplayCurrentPage />
      </div>
      <div className="flex flex-1/3 justify-center font-bold gap-10">
        <ToHomePageButton />
        <LogoutButton />
      </div>
    </div>
  );
};

export default Header;
