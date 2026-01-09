"use client";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SiteLinks } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

const drawerWith = 240;

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const pathname = usePathname();
  const date = new Date().getFullYear();
  const { user } = useAuth();

  if (pathname.startsWith("/lessons")) {
    return null;
  }

  const isLinkActive = (link: (typeof SiteLinks)[0]) => {
    if (pathname === link.link) {
      return true;
    }
    return false;
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="Sidebar fixed z-50 right-0 top-0">
      <div className="flex flex-row justify-end items-center p-5">
        <div>
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      {open && (
        <div
          className="border fixed z-40 right-0 top-0 w-full h-screen bg-black/50"
          onClick={handleDrawerClose}
        ></div>
      )}
      <Drawer
        sx={{
          width: drawerWith,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWith,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div className=" flex flex-1 flex-col relative">
          <div className="p-5 flex flex-row gap-2">
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
            <div>
              <p className="text-green-600 font-bold font-inter text-lg">
                DEJAY
              </p>
              <p className="text-xs font-medium">Driving School</p>
            </div>
          </div>
          <ul className="flex flex-col w-full px-2 gap-2 mt-2">
            {SiteLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <li key={link.name} className={`w-full `}>
                  <Link
                    href={link.link}
                    onClick={() =>
                      setTimeout(() => {
                        setOpen(false);
                      }, 1100)
                    }
                  >
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className={`relative flex flex-row items-center gap-3 py-3 px-4 ${
                        isActive ? "bg-gray-100 text-green-600" : ""
                      } rounded-md`}
                    >
                      <link.icon className="size-4" />
                      <p className="font-inter text-md">{link.name}</p>
                      {isActive && (
                        <motion.div
                          layoutId="move"
                          className="absolute right-2 top-2 w-2 h-2 bg-green-600 rounded-full"
                        ></motion.div>
                      )}
                    </motion.div>
                  </Link>
                </li>
              );
            })}
          </ul>
          {user ? (
            <div className="px-2 mt-2">
              <div className="bg-gray-100 p-3 rounded-md flex flex-row gap-3 items-center">
                <div>
                  <Image
                    src={user?.avatarUri || ""}
                    className="size-10 rounded-full"
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="text-sm font-inter">
                    {user?.surname} {user?.othernames}
                  </p>
                  <p className="text-xs font-inter">{user?.email}</p>
                  <p className="text-xs font-inter text-green-500">
                    {user?.role?.slice(0, 1).toUpperCase() +
                      (user?.role?.slice(1) || "")}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="px-2">
              <Link href="/auth/login">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full py-3 px-4 mt-6 bg-green-500 text-white rounded-md"
                >
                  <p className="text-sm font-inter text-center">Register</p>
                </motion.div>
              </Link>
            </div>
          )}

          <div className="absolute bottom-0 w-full p-5 py-2">
            <p className="font-inter text-xs">
              &copy; Veagy Co-operation {date}
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
