import React from "react";
import Navbar from "./navbar.jsx";
import Cursor from "./cursor.jsx";
import BottomSvg from "./BottomSvg";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Cursor />
      {/* <BottomSvg /> */}
    </>
  );
}
