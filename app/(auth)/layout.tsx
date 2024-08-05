import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
