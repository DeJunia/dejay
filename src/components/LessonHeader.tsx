import React from "react";
import { reactIcons } from "@/constant";
import { Button } from "./ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const LessonHeader = () => {
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = usePathname();

  const backgroundColor = useTransform(
    scrollY,
    [0, 10],
    ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 1)"]
  );

  return (
    <div className="w-full fixed z-50 top-0 left-0 right-0">
      <motion.div className="w-full" style={{ background: backgroundColor }}>
        <div className="mx-auto max-w-6xl flex flex-row justify-between items-center px-5 py-3">
          <div className="flex flex-row gap-3 items-center">
            <div
              className="size-10 bg-gray-100 rounded-full flex justify-center items-center"
              onClick={() => router.back()}
            >
              <reactIcons.back className="size-5" />
            </div>

            <div className="flex flex-row gap-2 items-center bg-green-100 py-2 px-3 rounded-lg">
              <reactIcons.lesson className="w-5 h-5" />
              <span>
                {pathname === "/lessons/add" ? "Add Lesson" : "Lessons"}
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <Button style="" text="Join Now" />
            <reactIcons.user className="w-5 h-5" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LessonHeader;
