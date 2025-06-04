import DisplayCurrentPage from "@/app/components/header/DisplayCurrentPage";
import LogoutButton from "@/app/components/header/LogoutButton";
import Today from "@/app/components/header/Today";
import ToHomePageButton from "@/app/components/header/ToHomePageButton";

const Header = () => {
  return (
    <div className="flex h-[8vh] items-center bg-red-100">
      <div className="flex flex-1/3 justify-center font-bold">
        <Today />
      </div>
      <div className="flex flex-1/3 justify-center text-xl font-bold">
        <DisplayCurrentPage />
      </div>
      <div className="flex flex-1/3 justify-center gap-10 font-bold">
        <ToHomePageButton />
        <LogoutButton />
      </div>
    </div>
  );
};

export default Header;
