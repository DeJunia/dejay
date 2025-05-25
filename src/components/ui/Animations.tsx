// components/AdvancedAnimator.tsx
"use client"

import { motion, useAnimation, useInView, Variants } from "framer-motion"
import { ReactNode, useEffect, useRef } from "react"

type AnimationType =
  | "fade"
  | "slide"
  | "spin"
  | "bounce"
  | "scale"
  | "flip"
  | "rotate"
  | "custom"

type Direction = "left" | "right" | "top" | "bottom" | "none"

interface AdvancedAnimatorProps {
  children: ReactNode
  type?: AnimationType
  direction?: Direction
  duration?: number
  delay?: number
  threshold?: number
  triggerOnce?: boolean
  loop?: boolean | number
  bounceDamping?: number
  bounceStiffness?: number
  spinTimes?: number
  scaleAmount?: number
  rotateAmount?: number
  customAnimation?: object
  startFrom?: number // 0-1, where in viewport animation should start (0 = top, 1 = bottom)
  staggerChildren?: number
  interval?: number // for auto-animating without scroll
  className?: string
  style?: React.CSSProperties
  onAnimationStart?: () => void
  onAnimationComplete?: () => void
}

const AdvancedAnimator = ({
  children,
  type = "fade",
  direction = "none",
  duration = 0.5,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  loop = false,
  bounceDamping = 10,
  bounceStiffness = 100,
  spinTimes = 1,
  scaleAmount = 1.2,
  rotateAmount = 20,
  customAnimation = {},
  startFrom = 0.2,
  staggerChildren = 0,
  interval = 0,
  className = "",
  style = {},
  onAnimationStart,
  onAnimationComplete,
}: AdvancedAnimatorProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: threshold,
    margin: `${
      startFrom === 0 ? 0 : startFrom === 1 ? 100 : startFrom * 100
    }% 0px`,
    once: triggerOnce,
  })

  // Base animations
  const getBaseAnimation = () => {
    switch (type) {
      case "fade":
        return { opacity: 0 }
      case "slide":
        return getSlideInitial()
      case "spin":
        return { rotate: 0 }
      case "bounce":
        return { y: 0 }
      case "scale":
        return { scale: 0.8 }
      case "flip":
        return { rotateX: 90, opacity: 0 }
      case "rotate":
        return { rotate: -rotateAmount }
      case "custom":
        return customAnimation
      default:
        return { opacity: 0 }
    }
  }

  const getSlideInitial = () => {
    switch (direction) {
      case "left":
        return { x: 100, opacity: 0 }
      case "right":
        return { x: -100, opacity: 0 }
      case "top":
        return { y: 100, opacity: 0 }
      case "bottom":
        return { y: -100, opacity: 0 }
      default:
        return { opacity: 0 }
    }
  }

  const getAnimateProps = () => {
    const base = {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: type === "spin" ? 360 * spinTimes : type === "rotate" ? 0 : undefined,
      scale: type === "scale" ? 1 : undefined,
      rotateX: type === "flip" ? 0 : undefined,
    }

    if (type === "bounce") {
      return {
        ...base,
        y: [0, -30, 0],
        transition: {
          duration,
          delay,
          ease: "easeOut",
          times: [0, 0.5, 1],
          repeat: typeof loop === "number" ? loop : loop ? Infinity : 0,
          repeatType: "loop" as const,
          bounce: bounceDamping / 10,
          stiffness: bounceStiffness,
        },
      }
    }

    return {
      ...base,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        staggerChildren,
      },
    }
  }

  // Handle scroll trigger
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      onAnimationStart?.()
    } else if (!triggerOnce) {
      controls.start("hidden")
    }
  }, [isInView, controls, triggerOnce, onAnimationStart])

  // Handle interval-based animation
  useEffect(() => {
    if (interval > 0) {
      const timer = setInterval(() => {
        controls.start("visible").then(() => {
          if (!loop) {
            controls.start("hidden")
          }
        })
      }, interval * 1000)

      return () => clearInterval(timer)
    }
  }, [interval, controls, loop])

  const variants = {
    hidden: getBaseAnimation() as Variants["hidden"],
    visible: getAnimateProps() as Variants["visible"]
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      style={style}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.div>
  )
}

export default AdvancedAnimator