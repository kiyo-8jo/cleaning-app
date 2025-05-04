import ChangeFloorButtons from "@/app/components/common/changeFloorButtons/ChangeFloorButtons";
import SideBar from "@/app/components/front/sideBar/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <ChangeFloorButtons />
      <div className="flex mt-1 gap-5">
        {children}
        <SideBar />
      </div>
    </div>
  );
};

export default layout;
