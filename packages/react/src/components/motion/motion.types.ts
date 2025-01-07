import type {
  MotionProps as OriginMotionProps,
  Target,
  TargetAndTransition,
  Transition,
} from "motion/react"
import type * as React from "react"
import type {
  ComponentArgs,
  OmitProps,
  StyledOptions,
  UIProps,
  WithoutAs,
} from "../../core"
import type { DOMElement } from "../../core"
import type { Dict, Merge } from "../../utils"

export interface MotionFactory {
  <T extends DOMElement = DOMElement, M extends object = {}>(
    el: T,
    options?: StyledOptions,
  ): UIMotionComponent<T, M>
}

type ComponentConditionalProps<
  Y extends DOMElement,
  M extends DOMElement,
  D extends object = {},
> = Y extends M
  ? OmitProps<React.ComponentProps<Y>, D>
  :
      | OmitProps<React.ComponentProps<M>, D>
      | OmitProps<React.ComponentProps<Y>, D>

type ComponentProps<
  Y extends DOMElement,
  M extends DOMElement,
  D extends object = {},
> = {
  as?: M
} & ComponentConditionalProps<Y, M, D>

export interface MotionComponent<Y extends DOMElement, D extends object = {}>
  extends ComponentArgs {
  <M extends DOMElement = Y>(props: ComponentProps<Y, M, D>): React.ReactElement
}

export type MotionComponents = {
  [Y in DOMElement]: UIMotionComponent<Y>
}

export interface UIMotionComponent<Y extends DOMElement, M extends object = {}>
  extends MotionComponent<Y, Merge<UIMotionProps, M>> {}

interface UIMotionProps extends Merge<UIProps, OriginMotionProps> {
  as?: DOMElement
}

export type MotionProps<Y extends DOMElement = "div"> = Merge<
  React.ComponentProps<Y>,
  UIMotionProps
>

export type MotionPropsWithoutAs<Y extends DOMElement = "div"> = WithoutAs<
  MotionProps<Y>
>

export type MotionPropsWithoutChildren<Y extends DOMElement = "div"> = Omit<
  MotionProps<Y>,
  "children"
>

type TargetResolver<Y = Dict> = (
  props: MotionTransitionProps & Y,
) => TargetAndTransition

type Variant<Y = Dict> = TargetAndTransition | TargetResolver<Y>

export interface MotionTransitionVariants<Y = Dict> {
  enter: Variant<Y>
  exit: Variant<Y>
  initial?: Variant<Y>
}

type MotionLifecycleProps<Y> = { [key in "enter" | "exit"]?: Y }

export interface MotionTransitionProps {
  /**
   * Custom `delay` definition for `enter` and `exit`.
   */
  delay?: MotionLifecycleProps<number> | number
  /**
   * Custom `duration` definition for `enter` and `exit`.
   */
  duration?: MotionLifecycleProps<number> | number
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
  /**
   * Custom `transition` definition for `enter` and `exit`.
   */
  transition?: MotionLifecycleProps<Transition>
  /**
   * Custom `transitionEnd` definition for `enter` and `exit`.
   */
  transitionEnd?: MotionLifecycleProps<Target>
}

export type WithTransitionProps<Y extends object> = {
  /**
   * Show the component. triggers when enter or exit states.
   */
  open?: boolean
  /**
   * If `true`, the element will unmount when `open={false}` and animation is done.
   */
  unmountOnExit?: boolean
} & MotionTransitionProps &
  Omit<Y, "transition" | "variants">
