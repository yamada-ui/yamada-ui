import type { Transition } from "motion/react"
import type { MotionTransitionProps } from "./index.types"
import { isNumber } from "../../utils"

export const createTransition = {
  enter: function (transition?: Transition) {
    return function (
      delay?: MotionTransitionProps["delay"],
      duration?: MotionTransitionProps["duration"],
    ): Transition {
      return {
        ...(transition ?? {
          duration: 0.25,
          ease: [0, 0, 0.2, 1],
        }),
        ...(duration
          ? { duration: isNumber(duration) ? duration : duration.enter }
          : {}),
        delay: isNumber(delay) ? delay : delay?.enter,
      }
    }
  },
  exit: function (transition?: Transition) {
    return function (
      delay?: MotionTransitionProps["delay"],
      duration?: MotionTransitionProps["duration"],
    ): Transition {
      return {
        ...(transition ?? {
          duration: 0.2,
          ease: [0.4, 0, 1, 1],
        }),
        ...(duration
          ? { duration: isNumber(duration) ? duration : duration.exit }
          : {}),
        delay: isNumber(delay) ? delay : delay?.exit,
      }
    }
  },
}
