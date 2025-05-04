import ChangeFloorButtons from "@/app/components/common/changeFloorButtons/ChangeFloorButtons";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <ChangeFloorButtons />
      {children}
    </div>
  );
};

export default layout;
