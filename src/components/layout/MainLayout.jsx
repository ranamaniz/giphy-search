import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section className="h-screen grid grid-rows-[44px_1fr]">
      <Header />
      <main className="p-4 bg-slate-200 grid grid-cols-1 ">
        <Outlet />
      </main>
    </section>
  );
};

export default MainLayout;
