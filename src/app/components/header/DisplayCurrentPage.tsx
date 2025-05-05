"use client";

import { usePathname } from "next/navigation";

const DisplayCurrentPage = () => {
  const path = usePathname();

  let displayWords = "";

  const displayPath = () => {
    switch (path) {
      case "/":
        displayWords = "ホーム画面";
        break;
      case "/front":
        displayWords = "フロント用画面";
        break;
      case "/house":
        displayWords = "ハウス用画面";
        break;
      case "/create":
        displayWords = "作成用画面";
        break;
      case "/login":
        displayWords = "ログイン画面";
        break;
    }
  };

  displayPath();

  return <div>{displayWords}</div>;
};

export default DisplayCurrentPage;
