"use client";

import { usePathname } from "next/navigation";

const DisplayCurrentPage = () => {
  const path = usePathname();

  let displayWords = "ホーム画面";

  const displayPath = () => {
    switch (path) {
      case "/front":
        displayWords = "フロント用画面";
        break;
      case "/house":
        displayWords = "ハウス用画面";
        break;
      case "/create":
        displayWords = "作成用画面";
        break;
    }
  };

  displayPath();

  return <div>{displayWords}</div>;
};

export default DisplayCurrentPage;
