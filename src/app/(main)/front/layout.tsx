import ChangeFloorButtons from "@/app/components/common/changeFloorButtons/ChangeFloorButtons";
import SideBarContainer from "@/app/components/front/sideBar/SideBarContainer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <ChangeFloorButtons />
      <div className="flex mt-1 gap-5">
        {children}
        <SideBarContainer />
      </div>
    </div>
  );
};

export default layout;
