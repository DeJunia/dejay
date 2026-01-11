export const cardVariants = {
  initial: {
    scale: 1,
    y: 0,
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
  },
};

export const arrowVariants = {
  initial: { x: 0, opacity: 0.6 },
  hover: {
    x: 6,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};
