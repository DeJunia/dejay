"use client";
import React from "react";
import LessonHeader from "@/components/LessonHeader";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const LessonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <main className="w-full overflow-x-hidden">
        <LessonHeader />
        {children}
      </main>
    </TooltipProvider>
  );
};

export default LessonLayout;
