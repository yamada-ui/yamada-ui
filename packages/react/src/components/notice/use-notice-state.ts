import type { PanInfo } from "motion/react"
import type { NoticeOptions } from "./types"
import { useIsPresent } from "motion/react"
import { useCallback, useState } from "react"
import { useTimeout } from "../../hooks/use-timeout"
import { useUpdateEffect } from "../../utils"
import { defaultVariants } from "./animation"

export interface UseNoticeStateOptions extends Partial<NoticeOptions> {
  /**
   * Called when the notice is closed (after exit animation).
   */
  onCloseComplete?: () => void
}

export const useNoticeState = (options: UseNoticeStateOptions = {}) => {
  const {
    id,
    closable = false,
    closeOnDrag = false,
    closeStrategy = "button",
    duration = 5000,
    isDelete = false,
    message,
    title,
    variants = defaultVariants,
    itemProps = {},
    onCloseComplete,
    onDelete,
  } = options

  const [delay, setDelay] = useState(duration)
  const isPresent = useIsPresent()

  const onMouseEnter = useCallback(() => {
    setDelay(null)
  }, [])
  const onMouseLeave = useCallback(() => {
    setDelay(duration)
  }, [duration])

  const handleClose = useCallback(() => {
    if (onDelete) onDelete()
  }, [onDelete])

  useTimeout(handleClose, delay)

  useUpdateEffect(() => {
    if (!isPresent && onCloseComplete) {
      onCloseComplete()
    }
  }, [isPresent, onCloseComplete])

  const dragClosable = closeOnDrag && closable
  const { dragOffset = 80, dragVelocity = 100, ...itemRest } = itemProps

  const getDragProps = useCallback(
    (placement: string) => {
      if (!dragClosable) return { drag: false }
      if (["bottom-center", "top-center"].includes(placement)) {
        return { drag: "y" as const }
      }
      return { drag: "x" as const }
    },
    [dragClosable],
  )

  const getDragRestriction = useCallback((placement: string, value: number) => {
    switch (placement) {
      case "top-center":
        return { bottom: value }
      case "bottom-center":
        return { top: value }
      case "top-left":
      case "bottom-left":
        return { right: value }
      case "top-right":
      case "bottom-right":
        return { left: value }
      default:
        return undefined
    }
  }, [])

  const handleDragEnd = useCallback(
    (
      placement: string,
      event: MouseEvent | PointerEvent | TouchEvent,
      info: PanInfo,
    ) => {
      switch (placement) {
        case "top-center":
          if (
            info.velocity.y <= dragVelocity * -1 ||
            info.offset.y <= dragOffset * -1
          ) {
            handleClose()
          }
          break
        case "bottom-center":
          if (info.velocity.y >= dragVelocity || info.offset.y >= dragOffset) {
            handleClose()
          }
          break
        case "top-left":
        case "bottom-left":
          if (
            info.velocity.x <= dragVelocity * -1 ||
            info.offset.x <= dragOffset * -1
          ) {
            handleClose()
          }
          break
        case "top-right":
        case "bottom-right":
          if (info.velocity.x >= dragVelocity || info.offset.x >= dragOffset) {
            handleClose()
          }
          break
      }
    },
    [dragVelocity, dragOffset, handleClose],
  )

  const getRootProps = useCallback(
    (props: { [key: string]: any } = {}) => ({
      ...props,
      "data-closable": closable,
      "data-close-on-drag": closeOnDrag,
      "data-delete": isDelete,
      onMouseEnter: (...args: any[]) => {
        if (typeof props.onMouseEnter === "function")
          props.onMouseEnter(...args)
        onMouseEnter()
      },
      onMouseLeave: (...args: any[]) => {
        if (typeof props.onMouseLeave === "function")
          props.onMouseLeave(...args)
        onMouseLeave()
      },
    }),
    [closable, closeOnDrag, isDelete, onMouseEnter, onMouseLeave],
  )

  const getContentProps = useCallback(
    (props: { [key: string]: any } = {}) => ({
      ...props,
    }),
    [],
  )

  const getCloseButtonProps = useCallback(
    (props: { [key: string]: any } = {}) => ({
      ...props,
      "aria-label": "Close notice",
      onClick: (...args: any[]) => {
        if (typeof props.onClick === "function") props.onClick(...args)
        handleClose()
      },
    }),
    [handleClose],
  )

  const getListItemProps = useCallback(
    (placement: string, rest: { [key: string]: any } = {}) => {
      const dragProps = getDragProps(placement)
      const dragConstraints = getDragRestriction(
        placement,
        itemProps.dragConstraints ?? 0,
      )
      const dragElastic = getDragRestriction(
        placement,
        itemProps.dragElastic ?? 0.1,
      )
      return {
        ...dragProps,
        animate: "animate",
        custom: { closeOnDrag, placement },
        dragConstraints,
        dragElastic,
        dragMomentum: false,
        dragSnapToOrigin: closeOnDrag ? closable : undefined,
        exit: "exit",
        initial: "initial",
        layout: true,
        variants,
        onDragEnd: (event: any, info: PanInfo) =>
          handleDragEnd(placement, event, info),
        onHoverEnd: onMouseLeave,
        onHoverStart: onMouseEnter,
        ...rest,
      }
    },
    [
      getDragProps,
      getDragRestriction,
      closeOnDrag,
      closable,
      handleDragEnd,
      onMouseLeave,
      onMouseEnter,
      itemProps,
      variants,
    ],
  )

  const getPlacementDataAttribute = useCallback(
    (placement: string) => ({
      ["data-placement-bottom"]: placement.includes("bottom"),
      ["data-placement-center"]: placement.includes("center"),
      ["data-placement-left"]: placement.includes("left"),
      ["data-placement-right"]: placement.includes("right"),
      ["data-placement-top"]: placement.includes("top"),
    }),
    [],
  )

  const getNoticeListInnerItemProps = useCallback(
    (placement: string, rest: { [key: string]: any } = {}) => ({
      ...getPlacementDataAttribute(placement),
      ...rest,
    }),
    [getPlacementDataAttribute],
  )

  return {
    id,
    closable,
    closeOnDrag,
    closeStrategy,
    duration,
    getDragRestriction,
    handleDragEnd,
    isDelete,
    message,
    title,
    variants,
    getCloseButtonProps,
    getContentProps,
    getDragProps,
    getListItemProps,
    getNoticeListInnerItemProps,
    getRootProps,
    itemProps: itemRest,
    onClose: handleClose,
    onMouseEnter,
    onMouseLeave,
  }
}
