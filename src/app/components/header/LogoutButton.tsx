"use client";

import { signOut } from "@/app/logout/actions";
import { usePathname } from "next/navigation";

const LogoutButton = () => {
  const pathName = usePathname();

  return (
    <div>
      {pathName !== "/login" && (
        <div onClick={signOut} className="text-sm sm:text-lg cursor-pointer">
          ログアウト
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
