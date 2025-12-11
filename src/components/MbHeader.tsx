"use client";
import React from "react";
import { image } from "@/constant";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

const MbHeader = () => {
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const backgroundColor = useTransform(
    scrollY,
    [0, 300],
    ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 1)"]
  );

  if (pathname.startsWith("/lessons")) {
    return null;
  }

  return (
    <motion.div
      className="MbHeader w-full fixed z-40 top-0 flex p-5 "
      style={{ background: backgroundColor }}
    >
      <Link href="/" className="flex flex-row gap-3">
        <Image
          src={image.logo}
          className="w-12 rounded-full"
          alt="Dejay logo"
        />
        <div>
          <p className="text-green-600 font-bold font-chango text-xl">DEJAY</p>
          <p className="text-sm font-semibold">Driving School</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default MbHeader;
