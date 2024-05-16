import type { PropGetter } from "@yamada-ui/utils"
import { useCallback } from "react"

export type UseSwipeableProps = {
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

export const useSwipeable = ({}: UseSwipeableProps) => {
  const getRightActionsMotionProps: PropGetter = useCallback(
    ({ className, ...props } = {}, ref) => ({
      ref,
      className,
      ...props,
    }),
    [],
  )

  const getRightActionsContainerProps: PropGetter = useCallback(
    ({ className, ...props } = {}, ref) => ({
      ref,
      className,
      ...props,
    }),
    [],
  )

  const getLeftActionsMotionProps: PropGetter = useCallback(
    ({ className, ...props } = {}, ref) => ({
      ref,
      className,
      ...props,
    }),
    [],
  )

  const getLeftActionsContainerProps: PropGetter = useCallback(
    ({ className, ...props } = {}, ref) => ({
      ref,
      className,
      ...props,
    }),
    [],
  )

  return {
    getRightActionsMotionProps,
    getRightActionsContainerProps,
    getLeftActionsMotionProps,
    getLeftActionsContainerProps,
  }
}

export type UseSwipeableReturn = ReturnType<typeof useSwipeable>
