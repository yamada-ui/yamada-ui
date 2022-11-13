import { isNumber } from '@yamada-ui/utils'
import type { Transition } from 'framer-motion'
import type { MotionTransitionProperties } from './'

export const MOTION_TRANSITION_EASINGS = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
} as const

export const MOTION_TRANSITION_VARIANTS = {
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 },
  },
  fade: {
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  },
  pushLeft: {
    enter: { x: '100%' },
    exit: { x: '-30%' },
  },
  pushRight: {
    enter: { x: '-100%' },
    exit: { x: '30%' },
  },
  pushUp: {
    enter: { y: '100%' },
    exit: { y: '-30%' },
  },
  pushDown: {
    enter: { y: '-100%' },
    exit: { y: '30%' },
  },
  slideLeft: {
    position: { left: 0, top: 0, bottom: 0, width: '100%' },
    enter: { x: 0, y: 0 },
    exit: { x: '-100%', y: 0 },
  },
  slideRight: {
    position: { right: 0, top: 0, bottom: 0, width: '100%' },
    enter: { x: 0, y: 0 },
    exit: { x: '100%', y: 0 },
  },
  slideUp: {
    position: { top: 0, left: 0, right: 0, maxWidth: '100vw' },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: '-100%' },
  },
  slideDown: {
    position: { bottom: 0, left: 0, right: 0, maxWidth: '100vw' },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: '100%' },
  },
} as const

export const MOTION_TRANSITION_DEFAULTS = {
  enter: {
    duration: 0.2,
    ease: MOTION_TRANSITION_EASINGS.easeOut,
  },
  exit: {
    duration: 0.1,
    ease: MOTION_TRANSITION_EASINGS.easeIn,
  },
} as const

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
