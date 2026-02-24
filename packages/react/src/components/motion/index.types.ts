import type {
  MotionProps as OriginMotionProps,
  ResolvedValues,
  TargetAndTransition,
  Transition,
} from "motion/react"
import type * as React from "react"
import type {
  ComponentArgs,
  DOMElement,
  OmitProps,
  StyledProps,
  WithoutAs,
  WithoutRef,
} from "../../core"
import type { Dict, Merge } from "../../utils"

type ComponentConditionalProps<
  Y extends DOMElement,
  M extends DOMElement,
  D extends object = {},
> = Y extends M
  ? OmitProps<React.ComponentProps<Y>, D>
  : OmitProps<React.ComponentProps<M>, D>

type ComponentProps<
  Y extends DOMElement,
  M extends DOMElement,
  D extends object = {},
> = ComponentConditionalProps<Y, M, WithoutRef<D>> & {
  as?: M
}

export interface MotionComponent<
  Y extends DOMElement,
  D extends object = {},
> extends ComponentArgs {
  <M extends DOMElement = Y>(props: ComponentProps<Y, M, D>): React.ReactElement
}

export interface MotionStyledComponent<
  Y extends DOMElement,
  M extends object = {},
> extends MotionComponent<Y, Merge<MotionStyledProps, M>> {}

interface StyledPropsWithoutAs extends Omit<StyledProps, "as"> {}

interface MotionStyledProps extends Merge<
  StyledPropsWithoutAs,
  OriginMotionProps
> {
  /**
   * The HTML element to render.
   */
  as?: DOMElement
}

export type HTMLMotionProps<Y extends DOMElement = "div"> = Merge<
  React.ComponentProps<Y>,
  MotionStyledProps
>

export type HTMLMotionPropsWithoutAs<Y extends DOMElement = "div"> = WithoutAs<
  HTMLMotionProps<Y>
>

export type HTMLMotionPropsWithoutChildren<Y extends DOMElement = "div"> = Omit<
  HTMLMotionProps<Y>,
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
   *
   * @default 0
   */
  delay?: MotionLifecycleProps<number> | number
  /**
   * Custom `duration` definition for `enter` and `exit`.
   *
   * @default 0.2
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
  transitionEnd?: MotionLifecycleProps<ResolvedValues>
}

export type WithTransitionProps<Y extends object = {}> = MotionTransitionProps &
  Omit<Y, "transition" | "variants"> & {
    /**
     * Show the component. triggers when enter or exit states.
     */
    open?: boolean
    /**
     * If `true`, the element will unmount when `open={false}` and animation is done.
     */
    unmountOnExit?: boolean
  }
