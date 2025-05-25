"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props {
  style?: string,
  link?: string,
  text?: string,
  tesxtStyle?: string
}   

interface ButtonProps {
  style?: string,
  text?: string,
  tesxtStyle?: string,
  onClick?: () => void,
}

export const SimpleButton: React.FC<Props> = ({style, link, text, tesxtStyle}) => {
  return (
    <Link href={`${link}`}>
      <motion.div 
      className={style}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <p className={tesxtStyle}>{text}</p>
      </motion.div>
    </Link>
  )
}


export const Button: React.FC<ButtonProps> = ({style, onClick, text, tesxtStyle}) => {
  return (
    <button onClick={onClick}>
      <motion.div 
      className={style}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <p className={tesxtStyle}>{text}</p>
      </motion.div>
    </button>
  )
}

