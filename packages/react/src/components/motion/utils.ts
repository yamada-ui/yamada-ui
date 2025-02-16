import type { Transition } from "motion/react"
import type { MotionTransitionProps } from "./index.types"
import { isNumber } from "../../utils"

export const MOTION_TRANSITION_EASINGS = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
} as const

export const MOTION_TRANSITION_VARIANTS = {
  fade: {
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  },
  pushDown: {
    enter: { y: "-100%" },
    exit: { y: "30%" },
  },
  pushLeft: {
    enter: { x: "100%" },
    exit: { x: "-30%" },
  },
  pushRight: {
    enter: { x: "-100%" },
    exit: { x: "30%" },
  },
  pushUp: {
    enter: { y: "100%" },
    exit: { y: "-30%" },
  },
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 },
  },
  slideDown: {
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "100%" },
    position: { bottom: 0, left: 0, maxWidth: "100vw", right: 0 },
  },
  slideLeft: {
    enter: { x: 0, y: 0 },
    exit: { x: "-100%", y: 0 },
    position: { bottom: 0, left: 0, top: 0, width: "100%" },
  },
  slideRight: {
    enter: { x: 0, y: 0 },
    exit: { x: "100%", y: 0 },
    position: { bottom: 0, right: 0, top: 0, width: "100%" },
  },
  slideUp: {
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "-100%" },
    position: { left: 0, maxWidth: "100vw", right: 0, top: 0 },
  },
} as const

export const MOTION_TRANSITION_DEFAULTS = {
  enter: {
    duration: 0.25,
    ease: MOTION_TRANSITION_EASINGS.easeOut,
  },
  exit: {
    duration: 0.2,
    ease: MOTION_TRANSITION_EASINGS.easeIn,
  },
} as const

export function transitionEnter(transition?: Transition) {
  return function (
    delay?: MotionTransitionProps["delay"],
    duration?: MotionTransitionProps["duration"],
  ): Transition {
    return {
      ...(transition ?? MOTION_TRANSITION_DEFAULTS.enter),
      ...(duration
        ? { duration: isNumber(duration) ? duration : duration.enter }
        : {}),
      delay: isNumber(delay) ? delay : delay?.enter,
    }
  }
}

export function transitionExit(transition?: Transition) {
  return function (
    delay?: MotionTransitionProps["delay"],
    duration?: MotionTransitionProps["duration"],
  ): Transition {
    return {
      ...(transition ?? MOTION_TRANSITION_DEFAULTS.exit),
      ...(duration
        ? { duration: isNumber(duration) ? duration : duration.exit }
        : {}),
      delay: isNumber(delay) ? delay : delay?.exit,
    }
  }
}
