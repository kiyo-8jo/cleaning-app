"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ToHomePage = () => {
  const path = usePathname();
  
  return <div>{path === "/" ? "" : <Link href="/">ホーム画面へ</Link>}</div>;
};

export default ToHomePage;
