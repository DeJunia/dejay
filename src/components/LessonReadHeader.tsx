"use client";
import React from "react";
import { reactIcons } from "@/constant";
import { Button } from "./ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { Download } from "lucide-react";
import { SiteLinks2 as Links } from "@/lib/data";

const LessonReadHeader = () => {
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuth();

  const backgroundColor = useTransform(
    scrollY,
    [0, 10],
    ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 1)"]
  );

  if (pathname === "/lessons/add") {
    return null;
  }

  return (
    <div className="w-full fixed z-90 top-0 left-0 right-0">
      <motion.div className="w-full" style={{ background: backgroundColor }}>
        <div className="mx-auto max-w-6xl flex flex-row justify-between items-center px-5 py-3">
          <div className="flex flex-row gap-3 items-center">
            <div
              className="size-10 bg-gray-100 rounded-full flex justify-center items-center"
              onClick={() => router.back()}
            >
              <reactIcons.back className="size-5" />
            </div>

            <div className="flex flex-col">
              <p className="font-chango font-medium text-green-500">Dejay</p>
              <p className="text-xs">Driving Lessons</p>
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <button className="bg-green-500 p-2 rounded-md text-sm px-4 flex flex-row gap-1 items-center">
              Downlaod PDF <Download className="size-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LessonReadHeader;
