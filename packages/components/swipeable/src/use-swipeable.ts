import type { CSSUIObject, CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import type { HTMLMotionProps } from "@yamada-ui/motion"
import { useMotionValue, useTransform } from "@yamada-ui/motion"
import {
  mergeRefs,
  type Dict,
  type Merge,
  type PropGetter,
} from "@yamada-ui/utils"
import { useCallback, useRef, useState } from "react"

type ActionProps = {}

export type SwipeableDirection = "right" | "left" | "none"

export type UseSwipeableOptions = {
  /**
   * Displayed when swiping right.
   */
  renderRightActions?: Merge<
    HTMLUIProps<"button">,
    {
      children: (props?: ActionProps) => React.ReactElement
    }
  >[]
  /**
   * Displayed when swiping left.
   */
  renderLeftActions?: Merge<
    HTMLUIProps<"button">,
    {
      children: (props?: ActionProps) => React.ReactElement
    }
  >[]
  //NOTE: UIValue<"number">
  leftActionProps?: CSSUIProps
  /**
   * Specifies how much the visual interaction is elastic compared to the distance of the drag..
   *
   * @default 1
   */
  dragElastic?: number
  /**
   * Distance from the left edge at which released panel will animate to the open state.
   */
  leftThreshold?: number
  /**
   * Distance from the right edge at which released panel will animate to the open state.
   */
  rightThreshold?: number
  /**
   * Distance that the panel must be dragged from the left edge to be considered a swipe.
   */
  dragOffsetFromLeftEdge?: number
  /**
   * Distance that the panel must be dragged from the right edge to be considered a swipe.
   */
  dragOffsetFromRightEdge?: number
  /**
   * Indicating if the swipeable panel can be pulled further than the left actions panel's width.
   *
   * @default true
   */
  overshootLeft?: boolean
  /**
   * Indicating if the swipeable panel can be pulled further than the right actions panel's width.
   *
   * @default true
   */
  overshootRight?: boolean
  /**
   * Specifies how much the visual interaction will be delayed compared to the gesture distance at overshoot.
   *
   * @default true
   */
  overshootFriction?: number
  /**
   * Called when action panel gets open.
   */
  onSwipeableOpen?: () => void
  /**
   * Called when action panel is closed.
   */
  onSwipeableClose?: () => void
  /**
   * Called when action panel starts animating on open.
   */
  onSwipeableWillOpen?: () => void
  /**
   * Called when action panel starts animating on close.
   */
  onSwipeableWillClose?: () => void
  /**
   * Method that closes component.
   */
  //NOTE: ref?
  close?: boolean
  /**
   * Method that opens component on left side.
   */
  openLeft?: boolean
  /**
   * Method that opens component on right side.
   */
  openRight?: boolean
  /**
   * Method that resets the swiping states of this Swipeable component.
   */
  reset?: boolean
}

export type UseSwipeableProps = UseSwipeableOptions & {
  styles: Dict<CSSUIObject>
}

export const useSwipeable = ({
  renderRightActions,
  renderLeftActions,
  dragElastic = 0.7,
  leftThreshold: leftThreasholdProp,
  rightThreshold: rightThreasholdProp,
  //NOTE:なんのやつかわからん
  // dragOffsetFromLeftEdge,
  // dragOffsetFromRightEdge,
  // overshootFriction,
  // overshootLeft = true,
  // overshootRight = true,
  // onSwipeableOpen,
  // onSwipeableClose,
  // onSwipeableWillOpen,
  // onSwipeableWillClose,
  dragOffsetFromLeftEdge,
  dragOffsetFromRightEdge,
  styles,
}: UseSwipeableProps) => {
  const [direction, setDirection] = useState<SwipeableDirection>("none")
  const componentRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const translateX = useMotionValue(0)

  const width = componentRef.current?.offsetWidth ?? 0
  const height = componentRef.current?.offsetHeight ?? 0
  const leftThreshold = leftThreasholdProp ?? width / 2
  const rightThreshold = rightThreasholdProp ?? width / 2

  let animateTranslateX: number

  if (direction === "right") {
    animateTranslateX = dragOffsetFromLeftEdge ?? width
  } else if (direction === "left") {
    animateTranslateX = -(dragOffsetFromRightEdge ?? width)
  } else {
    animateTranslateX = 0
  }

  const leftActionsWidth = useTransform(
    [x, translateX],
    ([x, translateX]: number[]) => {
      const delta = x + translateX

      if (delta > 0) {
        if (dragOffsetFromLeftEdge && delta > dragOffsetFromLeftEdge)
          return dragOffsetFromLeftEdge

        return delta
      }

      return 0
    },
  )

  const rightActionsWidth = useTransform(
    [x, translateX],
    ([x, translateX]: number[]) => {
      const delta = x + translateX
      if (delta < 0) {
        if (dragOffsetFromRightEdge && -delta > dragOffsetFromRightEdge)
          return dragOffsetFromRightEdge

        return -delta
      }

      return 0
    },
  )

  const handleDragEnd = useCallback(() =>
    // event: MouseEvent | TouchEvent | PointerEvent,
    // info: any,
    {
      if (
        (direction === "right" && x.get() < -leftThreshold) ||
        (direction === "left" && x.get() > rightThreshold)
      ) {
        setDirection("none")
      } else {
        if (x.get() > leftThreshold) {
          setDirection("right")
        } else if (x.get() < -rightThreshold) {
          setDirection("left")
        }
      }
    }, [direction, leftThreshold, rightThreshold, x])

  const getSwipeableProps: PropGetter<
    HTMLMotionProps<"div">,
    HTMLMotionProps<"div">
  > = useCallback(
    ({ className, ...props } = {}, ref) => ({
      ref: mergeRefs(ref, componentRef),
      className,
      drag: "x",
      dragConstraints: {
        left: 0,
        right: 0,
      },
      dragElastic: dragElastic,
      onDragEnd: handleDragEnd,
      animate: {
        translateX: animateTranslateX,
      },
      transition: { type: "spring", bounce: 0 },
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        border: "solid",
        x,
        translateX,
      },
      ...props,
    }),
    [animateTranslateX, dragElastic, handleDragEnd, translateX, x],
  )

  const getRightActionsMotionProps: PropGetter<
    HTMLMotionProps<"div">,
    HTMLMotionProps<"div">
  > = useCallback(
    ({ className, ...props } = {}, ref) => ({
      ref,
      className,
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        height,
        width: rightActionsWidth,
        overflow: "hidden",
      },
      ...props,
    }),
    [height, rightActionsWidth],
  )

  const getRightActionsContainerProps: PropGetter = useCallback(
    ({ className, ...props } = {}, ref) => ({
      ref,
      className,
      __css: {
        zIndex: -1,
        w: "100%",
        h: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${renderRightActions?.length ?? 0},1fr)`,
        ...styles.swipeableRightAction,
      },
      onClick: () => {
        setDirection("none")
      },
      ...props,
    }),
    [renderRightActions?.length, styles.swipeableRightAction],
  )

  const getLeftActionsMotionProps: PropGetter<
    HTMLMotionProps<"div">,
    HTMLMotionProps<"div">
  > = useCallback(
    ({ className, ...props } = {}, ref) => ({
      ref,
      className,
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        height,
        width: leftActionsWidth,
      },
      ...props,
    }),
    [height, leftActionsWidth],
  )

  const getLeftActionsContainerProps: PropGetter = useCallback(
    ({ className, ...props } = {}, ref) => ({
      ref,
      className,
      __css: {
        zIndex: -1,
        w: "100%",
        h: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${renderLeftActions?.length ?? 0},1fr)`,
        ...styles.swipeableLeftAction,
      },
      onClick: () => {
        setDirection("none")
      },
      ...props,
    }),
    [renderLeftActions?.length, styles.swipeableLeftAction],
  )

  return {
    getSwipeableProps,
    getRightActionsMotionProps,
    getRightActionsContainerProps,
    getLeftActionsMotionProps,
    getLeftActionsContainerProps,
  }
}

export type UseSwipeableReturn = ReturnType<typeof useSwipeable>
