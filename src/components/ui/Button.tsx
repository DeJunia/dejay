"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Spinner } from "./spinner";

interface Props {
  style?: string;
  link?: string;
  text?: string;
  tesxtStyle?: string;
}

interface ButtonProps {
  style?: string;
  text?: string;
  tesxtStyle?: string;
  onClick?: () => void;
  loading?: boolean;
  spinnerStyle?: string;
}

export const SimpleButton: React.FC<Props> = ({
  style,
  link,
  text,
  tesxtStyle,
}) => {
  return (
    <Link href={`${link}`}>
      <motion.div
        className={style}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <p className={tesxtStyle}>{text}</p>
      </motion.div>
    </Link>
  );
};

export const Button: React.FC<ButtonProps> = ({
  style,
  onClick,
  text,
  tesxtStyle,
  loading,
  spinnerStyle,
}) => {
  return (
    <button onClick={onClick} disabled={loading} className="flex-1 w-full">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200, damping: 9 }}
      >
        <div className={style}>
          {loading ? (
            <Spinner
              className={`size-6"
            ${spinnerStyle}`}
            />
          ) : (
            <p className={tesxtStyle}>{text}</p>
          )}
        </div>
      </motion.div>
    </button>
  );
};
