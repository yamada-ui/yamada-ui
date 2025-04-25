import type { HTMLProps, PropGetter, StyleValue } from "../../core"
import type { UseModalProps } from "../modal"
import type { HTMLMotionProps } from "../motion"
import { useCallback, useMemo } from "react"
import { useValue } from "../../hooks/use-value"
import { handlerAll } from "../../utils"
import { useModal } from "../modal"

type DragEndEventHandler = Required<HTMLMotionProps>["onDragEnd"]

export interface UseDrawerProps extends UseModalProps {
  /**
   * If `true`, then the drawer will close on drag.
   *
   * @default false
   */
  closeOnDrag?: boolean
  /**
   * Applies constraints on the permitted draggable area.
   *
   * @default 0
   */
  dragConstraints?: number
  /**
   * The degree of movement allowed outside constraints. 0 = no movement, 1 = full movement.
   *
   * @default 0.1
   */
  dragElastic?: number
  /**
   * Offset from being dragged to closing.
   *
   * @default 80
   */
  dragOffset?: number
  /**
   * Velocity of the drag that triggers close.
   *
   * @default 100
   */
  dragVelocity?: number
  /**
   * The placement of the drawer.
   *
   * @default 'right'
   */
  placement?: StyleValue<"bottom" | "left" | "right" | "top">
}

export const useDrawer = ({
  closeOnDrag = false,
  closeOnEsc,
  closeOnOverlay,
  dragConstraints = 0,
  dragElastic = 0.1,
  dragOffset = 80,
  dragVelocity = 100,
  placement: placementProp = "right",
  onEsc,
  ...rest
}: UseDrawerProps = {}) => {
  const placement = useValue(placementProp)
  const {
    getContentProps: getModalContentProps,
    onClose,
    ...modalProps
  } = useModal({
    closeOnEsc,
    closeOnOverlay,
    onEsc,
    ...rest,
  })

  const drag = useMemo<HTMLMotionProps["drag"]>(() => {
    if (!closeOnDrag) return false

    switch (placement) {
      case "top":
      case "bottom":
        return "y"
      case "left":
      case "right":
        return "x"
    }
  }, [placement, closeOnDrag])

  const getDragRestriction = useCallback(
    (value: number) => {
      switch (placement) {
        case "top":
          return { bottom: value }
        case "bottom":
          return { top: value }
        case "left":
          return { right: value }
        case "right":
          return { left: value }
      }
    },
    [placement],
  )

  const onDragEnd: DragEndEventHandler = useCallback(
    (_, info) => {
      switch (placement) {
        case "top":
          if (
            info.velocity.y <= dragVelocity * -1 ||
            info.offset.y <= dragOffset * -1
          )
            onClose()
          break

        case "bottom":
          if (info.velocity.y >= dragVelocity || info.offset.y >= dragOffset)
            onClose()
          break

        case "left":
          if (
            info.velocity.x <= dragVelocity * -1 ||
            info.offset.x <= dragOffset * -1
          )
            onClose()
          break

        case "right":
          if (info.velocity.x >= dragVelocity || info.offset.x >= dragOffset)
            onClose()
          break
      }
    },
    [placement, dragVelocity, dragOffset, onClose],
  )

  const getContentProps: PropGetter<HTMLMotionProps<"section">> = useCallback(
    (props = {}) => ({
      drag,
      dragConstraints: getDragRestriction(dragConstraints),
      dragElastic: getDragRestriction(dragElastic),
      dragMomentum: false,
      dragSnapToOrigin: true,
      ...(getModalContentProps(
        props as HTMLProps<"section">,
      ) as HTMLMotionProps<"section">),
      onDragEnd: handlerAll(props.onDragEnd, onDragEnd),
    }),
    [
      drag,
      getDragRestriction,
      dragConstraints,
      dragElastic,
      onDragEnd,
      getModalContentProps,
    ],
  )

  const getDragBarProps: PropGetter = useCallback(
    (props) => ({
      ...props,
    }),
    [],
  )

  return {
    ...modalProps,
    closeOnDrag,
    getContentProps,
    getDragBarProps,
    onClose,
  }
}

export type UseDrawerReturn = ReturnType<typeof useDrawer>
