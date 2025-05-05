"use client";

import { signOut } from "@/app/logout/actions";

const LogoutButton = () => {
  return (
    <div onClick={signOut} className="cursor-pointer">
      ログアウト
    </div>
  );
};

export default LogoutButton;
