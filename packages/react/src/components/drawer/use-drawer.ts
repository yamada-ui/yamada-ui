"use client"

import type { PointerEvent as ReactPointerEvent } from "react"
import type { HTMLProps, PropGetter, SimplePlacement } from "../../core"
import type { UseModalProps } from "../modal"
import type { HTMLMotionProps } from "../motion"
import { useDragControls } from "motion/react"
import { useCallback, useEffect, useMemo, useRef } from "react"
import { mergeProps, useEnvironment } from "../../core"
import { addDomEvent, cast, isHTMLElement } from "../../utils"
import { useModal } from "../modal"

type DragEndEventHandler = Required<HTMLMotionProps>["onDragEnd"]

interface DragGesture {
  ev: PointerEvent
  owner: "drag" | "pending" | "scroll"
  path: HTMLElement[]
}

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
   * If `true`, only the drag bar and drag triggers can start dragging when `closeOnDrag` is `true`.
   *
   * @default false
   */
  dragHandleOnly?: boolean
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
   * @default 'inline-end'
   */
  placement?: SimplePlacement
}

export const useDrawer = ({
  closeOnDrag = false,
  closeOnEsc,
  closeOnOverlay,
  dragConstraints = 0,
  dragElastic = 0.1,
  dragHandleOnly = false,
  dragOffset = 80,
  dragVelocity = 100,
  placement = "inline-end",
  onEsc,
  ...rest
}: UseDrawerProps = {}) => {
  const { getWindow } = useEnvironment()
  const {
    open,
    getContentProps: getModalContentProps,
    onClose,
    ...modalProps
  } = useModal({
    closeOnEsc,
    closeOnOverlay,
    onEsc,
    ...rest,
  })
  const dragControls = useDragControls()
  const gesture = useRef<DragGesture | undefined>(undefined)
  const controller = useRef<AbortController | undefined>(undefined)
  const axis = placement.startsWith("block") ? "y" : "x"
  const direction = placement.endsWith("end") ? 1 : -1

  const drag = useMemo<HTMLMotionProps["drag"]>(() => {
    if (!closeOnDrag) return false

    switch (placement) {
      case "block-start":
      case "block-end":
        return "y"
      case "inline-start":
      case "inline-end":
        return "x"
    }
  }, [placement, closeOnDrag])

  const resetGesture = useCallback(() => {
    controller.current?.abort()
    controller.current = undefined
    gesture.current = undefined
  }, [])

  const canScroll = useCallback(
    (path: HTMLElement[], axis: "x" | "y", delta: number) => {
      const win = getWindow()

      if (!win) return false

      return path.some((el) => {
        const style = win.getComputedStyle(el)
        const overflow = axis === "x" ? style.overflowX : style.overflowY

        if (!/auto|scroll|overlay/.test(overflow)) return false

        const size = axis === "x" ? el.scrollWidth : el.scrollHeight
        const clientSize = axis === "x" ? el.clientWidth : el.clientHeight
        const offset = axis === "x" ? el.scrollLeft : el.scrollTop
        const reversed =
          axis === "x"
            ? style.direction === "rtl"
            : style.flexDirection === "column-reverse"
        const min = reversed ? clientSize - size : 0
        const max = reversed ? 0 : size - clientSize

        if (size <= clientSize) return false

        return delta > 0 ? offset > min + 1 : offset < max - 1
      })
    },
    [getWindow],
  )

  const updateGesture = useCallback(
    (x: number, y: number) => {
      const current = gesture.current

      if (current?.owner !== "pending") return

      const dx = x - current.ev.clientX
      const dy = y - current.ev.clientY
      const delta = axis === "x" ? dx : dy
      const crossDelta = axis === "x" ? dy : dx

      if (Math.max(Math.abs(delta), Math.abs(crossDelta)) < 3) return

      if (
        Math.abs(crossDelta) > Math.abs(delta) ||
        delta * direction <= 0 ||
        canScroll(current.path, axis, delta)
      ) {
        current.owner = "scroll"
      } else {
        current.owner = "drag"
        dragControls.start(current.ev)
      }
    },
    [axis, canScroll, direction, dragControls],
  )

  const onPointerDown = useCallback(
    (ev: ReactPointerEvent<HTMLElement>) => {
      if (ev.defaultPrevented) return

      resetGesture()

      if (!open || !closeOnDrag || dragHandleOnly) return
      if (ev.button !== 0 || !ev.isPrimary) return

      if (ev.pointerType === "mouse") {
        dragControls.start(ev)
      } else {
        const win = getWindow()

        if (!win) return

        const targets = ev.nativeEvent.composedPath()
        const path = targets
          .slice(0, targets.indexOf(ev.currentTarget) + 1)
          .filter(isHTMLElement)

        gesture.current = { ev: ev.nativeEvent, owner: "pending", path }
        controller.current = new AbortController()

        addDomEvent(
          ev.currentTarget,
          "touchmove",
          (ev) => {
            if (ev.touches.length !== 1) {
              resetGesture()
            } else {
              if (!ev.touches[0]) return

              updateGesture(ev.touches[0].clientX, ev.touches[0].clientY)

              if (gesture.current?.owner === "drag" && ev.cancelable)
                ev.preventDefault()
            }
          },
          { passive: false, signal: controller.current.signal },
        )
        win.addEventListener("pointerup", resetGesture, {
          signal: controller.current.signal,
          once: true,
        })
        win.addEventListener("pointercancel", resetGesture, {
          signal: controller.current.signal,
          once: true,
        })
      }
    },
    [
      closeOnDrag,
      dragControls,
      dragHandleOnly,
      getWindow,
      open,
      resetGesture,
      updateGesture,
    ],
  )

  const onPointerMove = useCallback(
    (ev: ReactPointerEvent<HTMLElement>) => {
      if (ev.defaultPrevented) return
      if (ev.pointerId !== gesture.current?.ev.pointerId) return

      updateGesture(ev.clientX, ev.clientY)
    },
    [updateGesture],
  )

  const getDragRestriction = useCallback(
    (value: number) => {
      switch (placement) {
        case "block-start":
          return { bottom: value }
        case "block-end":
          return { top: value }
        case "inline-start":
          return { right: value }
        case "inline-end":
          return { left: value }
      }
    },
    [placement],
  )

  const onDragEnd: DragEndEventHandler = useCallback(
    (ev, info) => {
      if (ev.defaultPrevented) return
      if (ev.type === "pointercancel" || ev.type === "touchcancel") return

      switch (placement) {
        case "block-start":
          if (
            info.velocity.y <= dragVelocity * -1 ||
            info.offset.y <= dragOffset * -1
          )
            onClose()
          break

        case "block-end":
          if (info.velocity.y >= dragVelocity || info.offset.y >= dragOffset)
            onClose()
          break

        case "inline-start":
          if (
            info.velocity.x <= dragVelocity * -1 ||
            info.offset.x <= dragOffset * -1
          )
            onClose()
          break

        case "inline-end":
          if (info.velocity.x >= dragVelocity || info.offset.x >= dragOffset)
            onClose()
          break
      }
    },
    [placement, dragVelocity, dragOffset, onClose],
  )

  useEffect(() => {
    resetGesture()

    return resetGesture
  }, [closeOnDrag, dragHandleOnly, open, placement, resetGesture])

  const getContentProps: PropGetter<HTMLMotionProps<"section">> = useCallback(
    (props = {}) =>
      mergeProps(
        {
          drag,
          dragConstraints: getDragRestriction(dragConstraints),
          dragControls,
          dragElastic: getDragRestriction(dragElastic),
          dragListener: false,
          dragMomentum: false,
          dragSnapToOrigin: true,
        },
        cast<HTMLMotionProps<"section">>(
          getModalContentProps(cast<HTMLProps<"section">>(props)),
        ),
        {
          onDragEnd,
          onPointerDown,
          onPointerMove,
        },
      )(),
    [
      drag,
      dragControls,
      getDragRestriction,
      dragConstraints,
      dragElastic,
      onDragEnd,
      getModalContentProps,
      onPointerDown,
      onPointerMove,
    ],
  )

  const getDragTriggerProps: PropGetter = useCallback(
    (props = {}) =>
      mergeProps(
        {
          style: {
            touchAction: closeOnDrag && dragHandleOnly ? "none" : undefined,
          },
        },
        props,
        {
          onPointerDown: (ev) => {
            if (closeOnDrag && dragHandleOnly) dragControls.start(ev)
          },
        },
      )(),
    [closeOnDrag, dragHandleOnly, dragControls],
  )

  return {
    ...modalProps,
    closeOnDrag,
    open,
    getContentProps,
    getDragBarProps: getDragTriggerProps,
    getDragTriggerProps,
    onClose,
  }
}

export type UseDrawerReturn = ReturnType<typeof useDrawer>
