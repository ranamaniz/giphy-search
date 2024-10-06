import React from "react";
import Header from "../Header/Header";

const MainLayout = ({ children }) => {
  return (
    <section className="h-screen grid grid-rows-[44px_1fr]">
      <Header />
      <main className="p-4">{children}</main>
    </section>
  );
};

export default MainLayout;
