"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ToHomePageButton = () => {
  const path = usePathname();
  const getButton = () => {
    switch (path) {
      case "/":
        return "";
      case "/login":
        return "";
      case "/front":
        return <Link href="/">ホーム画面へ</Link>;
      case "/house":
        return <Link href="/">ホーム画面へ</Link>;
      case "/create":
        return <Link href="/">ホーム画面へ</Link>;
    }
  };

  return (
    <div className="hidden text-sm sm:block sm:text-lg">{getButton()}</div>
  );
};

export default ToHomePageButton;
