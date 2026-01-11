import React from "react";
import { reactIcons } from "@/constant";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { LayoutDashboard, BookOpenCheck } from "lucide-react";
import { SiteLinks2 as Links } from "@/lib/data";

const LessonHeader = () => {
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuth();

  const backgroundColor = useTransform(
    scrollY,
    [0, 10],
    ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 1)"]
  );

  if (pathname === "/lessons/add" || pathname.startsWith("/lessons/read")) {
    return null;
  }

  const isLinkActive = (link: (typeof Links)[0]) => {
    if (pathname === link.link) {
      return true;
    }
    return false;
  };

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

            <div className="flex flex-col">
              <p className="font-chango font-medium text-green-500">Dejay</p>
              <p className="text-xs">Driving Lessons</p>
            </div>
          </div>
          <div className="h-12 hidden md:flex">
            <ul className="flex flex-row gap-5 h-full ">
              {Links.map((link) => {
                const isActive = isLinkActive(link);

                return (
                  <li key={link.name}>
                    <Link href={link.link}>
                      <motion.div className="flex flex-col relative items-center justify-center h-full">
                        <motion.div>
                          <motion.div
                            className={`flex flex-row items-center justify-center ${
                              isActive ? "text-green-600 bg-gray-50" : ""
                            } gap-2 px-3 h-8 rounded-md text-gray-800`}
                            initial={false}
                            animate={{
                              transition: {
                                duration: 0.5,
                              },
                            }}
                          >
                            <link.icon className="size-4" />
                            <p className="font-inter text-sm">{link.name}</p>
                          </motion.div>
                        </motion.div>
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 w-full h-0.5 bg-green-500 rounded-md"
                            layoutId="underline"
                          />
                        )}
                      </motion.div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <Link href="/lessons/add">
              <div className="flex flex-row items-center justify-center gap-2">
                <BookOpenCheck className="size-6 md:size-3.5" />
                <span className="hidden md:flex text-xs">Add Lesson</span>
              </div>
            </Link>

            {user ? (
              <Link href={"/"}>
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src={user?.avatarUri || ""}
                    className="size-8 rounded-full"
                    alt="avatar"
                    width={28}
                    height={28}
                  />
                  {user.role === "student" && (
                    <div className="hidden md:flex flex-col">
                      <p className="text-sm max-w-25 truncate">
                        {user?.surname} {user?.othernames}
                      </p>
                      <p className="text-xs text-green-500">
                        {user?.role.slice(0, 1).toLocaleUpperCase() +
                          user?.role.slice(1)}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            ) : (
              <div className="flex flex-row items-center bg-green-100 py-2 px-2 rounded-full">
                <reactIcons.user className="w-5 h-5" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LessonHeader;
