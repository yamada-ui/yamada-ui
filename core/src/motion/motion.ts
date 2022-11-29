import { isNumber } from '@yamada-ui/utils'
import type { Transition } from 'framer-motion'
import { MotionTransitionProperties, MOTION_TRANSITION_DEFAULTS } from '.'

export const transitionEnter =
  (transition?: Transition) =>
  (
    delay?: MotionTransitionProperties['delay'],
    duration?: MotionTransitionProperties['duration'],
  ): Transition => ({
    ...(transition ?? MOTION_TRANSITION_DEFAULTS.enter),
    ...(duration ? { duration: isNumber(duration) ? duration : duration?.enter } : {}),
    delay: isNumber(delay) ? delay : delay?.enter,
  })

export const transitionExit =
  (transition?: Transition) =>
  (
    delay?: MotionTransitionProperties['delay'],
    duration?: MotionTransitionProperties['duration'],
  ): Transition => ({
    ...(transition ?? MOTION_TRANSITION_DEFAULTS.exit),
    ...(duration ? { duration: isNumber(duration) ? duration : duration?.exit } : {}),
    delay: isNumber(delay) ? delay : delay?.exit,
  })
