import React from "react";
import Header from "@/components/Header";
import MbHeader from "@/components/MbHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const TabsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <MbHeader />
      <Sidebar />
      <main className="w-full overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
};

export default TabsLayout;
