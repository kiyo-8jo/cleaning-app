import DisplayCurrentPage from "@/app/components/header/DisplayCurrentPage";
import LogoutButton from "@/app/components/header/LogoutButton";
import Today from "@/app/components/header/Today";
import ToHomePageButton from "@/app/components/header/ToHomePageButton";

const Header = () => {
  return (
    <div className="h-[5vh] bg-red-100 flex items-center">
      <div className="flex flex-1/3 justify-center font-bold">
        <Today />
      </div>
      <div className="flex flex-1/3 justify-center font-bold text-xl gap-5 ">
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
