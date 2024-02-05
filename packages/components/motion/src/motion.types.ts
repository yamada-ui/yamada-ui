import type { Dict, Merge } from "@yamada-ui/utils"
import type {
  Target,
  TargetAndTransition,
  Transition,
  motion,
} from "framer-motion"
import type { Ref, RefAttributes, ReactHTML } from "react"
import type { MotionProps } from "./motion"

export type {
  HTMLMotionProps,
  SVGMotionProps,
  Variants as MotionVariants,
  Transition as MotionTransition,
  AnimatePresenceProps as MotionAnimatePresenceProps,
  LayoutProps as MotionLayoutProps,
  LazyProps as MotionLazyProps,
  MotionConfigProps,
  MotionStyle,
  DragControls,
  AnimationControls as MotionAnimationControls,
  AnimationProps as MotionAnimationProps,
  AnimationType as MotionAnimationType,
  AnimationLifecycles as MotionAnimationLifecycles,
  AnimationOptions as MotionAnimationOptions,
  AnimationPlaybackControls as MotionAnimationPlaybackControls,
  MotionValue,
} from "framer-motion"

export type MotionAs = keyof typeof motion

type TargetResolver<Y = Dict> = (
  props: Y & MotionTransitionProperties,
) => TargetAndTransition

type Variant<Y = Dict> = TargetAndTransition | TargetResolver<Y>

export type MotionTransitionVariants<Y = Dict> = {
  enter: Variant<Y>
  exit: Variant<Y>
  initial?: Variant<Y>
}

export type MotionTransitionProperties = {
  /**
   * Custom `transition` definition for `enter` and `exit`.
   */
  transition?: MotionTransitionProps
  /**
   * Custom `transitionEnd` definition for `enter` and `exit`.
   */
  transitionEnd?: MotionTransitionEndProps
  /**
   * Custom `delay` definition for `enter` and `exit`.
   */
  delay?: number | MotionDelayProps
  /**
   * Custom `duration` definition for `enter` and `exit`.
   */
  duration?: number | MotionDurationProps
  /**
   * Custom `enter`.
   */
  enter?: any
  /**
   * Custom `exit`.
   */
  exit?: any
  /**
   * Custom `initial`.
   */
  initial?: any
}

type WithMotionProps<Y> = Partial<Record<"enter" | "exit", Y>>

export type MotionTransitionProps = WithMotionProps<Transition>

export type MotionTransitionEndProps = WithMotionProps<Target>

export type MotionDelayProps = WithMotionProps<number>

export type MotionDurationProps = WithMotionProps<number>

export type WithTransitionProps<Y extends object> = Omit<Y, "transition"> &
  MotionTransitionProperties & {
    /**
     * If `true`, the element will unmount when `isOpen={false}` and animation is done.
     */
    unmountOnExit?: boolean
    /**
     * Show the component. triggers when enter or exit states.
     */
    isOpen?: boolean
  }

export type MotionUIPropGetter<
  Y extends keyof ReactHTML = "div",
  M = undefined,
> = (
  props?: Merge<MotionProps<Y>, M>,
  ref?: Ref<any>,
) => MotionProps<Y> & RefAttributes<any>

export type RequiredMotionUIPropGetter<
  Y extends keyof ReactHTML = "div",
  M = undefined,
> = (
  props: Merge<MotionProps<Y>, M>,
  ref?: Ref<any>,
) => MotionProps<Y> & RefAttributes<any>
