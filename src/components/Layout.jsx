import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="app-container">
      <Header />
      <div className="note-app__body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
