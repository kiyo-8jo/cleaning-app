"use client";

import { signOut } from "@/app/logout/actions";
import { usePathname } from "next/navigation";

const LogoutButton = () => {
  const pathName = usePathname();

  return (
    <div>
      {pathName !== "/login" && (
        <div onClick={signOut} className="cursor-pointer text-sm sm:text-lg">
          ログアウト
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
