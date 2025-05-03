import DisplayCurrentPage from "@/app/components/header/DisplayCurrentPage";
import Today from "@/app/components/header/Today";
import ToHomePage from "@/app/components/header/ToHomePage";

const Header = () => {
  return (
    <div className="h-15 bg-red-100 flex items-center">
      <div className="flex flex-1/3 justify-center font-bold">
        <Today />
      </div>
      <div className="flex flex-1/3 justify-center font-bold text-xl gap-5 ">
        <DisplayCurrentPage />
      </div>
      <div className="flex flex-1/3 justify-center font-bold gap-10">
        <ToHomePage />
        <div>サインイン</div>
        {/* <div>サインアウト</div> */}
      </div>
    </div>
  );
};

export default Header;
