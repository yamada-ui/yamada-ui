"use client"

import type { UIEvent } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react"
import { dataAttr, handlerAll, isMac, vendor } from "../../utils"
import { mergeRefs, useSafeLayoutEffect } from "../../utils"

export interface UseScrollAreaProps extends HTMLProps {
  /**
   * Scrollbar visibility type.
   *
   * @default 'hover'
   */
  type?: "always" | "hover" | "never" | "scroll"
  /**
   * Delay in milliseconds before scrollbars are hidden.
   *
   * @default 1000
   */
  scrollHideDelay?: number
  /**
   * Callback function for when the scroll position changes.
   */
  onScrollPositionChange?: ({ x, y }: { x: number; y: number }) => void
}

export const useScrollArea = ({
  id,
  ref,
  type = "hover",
  scrollHideDelay = 1000,
  onScrollPositionChange,
  ...rest
}: UseScrollAreaProps = {}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  const isAlways = type === "always"
  const isNever = type === "never"
  const isHidden = !isAlways && !isHovered && !isScrolling
  const isSafari = isMac() && vendor(/apple/i)
  const uuid = useId()
  const key = `${id ?? uuid}-${isHovered}-${isScrolling}`

  const hoverTimeout = useRef<any>(undefined)
  const scrollTimeout = useRef<any>(undefined)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const scrollPosition = useRef({ x: 0, y: 0 })

  useSafeLayoutEffect(() => {
    if (!scrollAreaRef.current || !isSafari) return

    scrollAreaRef.current.scrollLeft = scrollPosition.current.x
    scrollAreaRef.current.scrollTop = scrollPosition.current.y
  })

  const onMouseEnter = useCallback(() => {
    if (type !== "hover") return

    clearTimeout(hoverTimeout.current)

    setIsHovered(true)
  }, [type])

  const onMouseLeave = useCallback(() => {
    if (type !== "hover") return

    hoverTimeout.current = setTimeout(
      () => setIsHovered(false),
      scrollHideDelay,
    )
  }, [scrollHideDelay, type])

  const onScroll = useCallback(
    (ev: UIEvent<HTMLDivElement>) => {
      const el = ev.target as HTMLDivElement

      const { scrollLeft: x, scrollTop: y } = el
      const { x: prevX, y: prevY } = scrollPosition.current
      const isEqual = Math.abs(x - prevX) <= 5 && Math.abs(y - prevY) <= 5

      onScrollPositionChange?.({ x, y })
      scrollPosition.current = { x, y }

      if (type !== "scroll" || isEqual) return

      if (!isScrolling) setIsScrolling(true)

      clearTimeout(scrollTimeout.current)

      scrollTimeout.current = setTimeout(
        () => setIsScrolling(false),
        scrollHideDelay,
      )
    },
    [isScrolling, onScrollPositionChange, scrollHideDelay, type],
  )

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    }
  }, [])

  const safariProps = useMemo(
    () => ({
      key,
      ref: mergeRefs(ref, scrollAreaRef),
      "data-key": key,
    }),
    [key, ref, scrollAreaRef],
  )

  const getRootProps: PropGetter = useCallback(
    ({ style, ...props } = {}) => ({
      ref,
      style: { overflow: "auto", ...style },
      ...rest,
      ...(isSafari ? safariProps : {}),
      ...props,
      "data-hidden": dataAttr(isHidden),
      "data-hover": dataAttr(isHovered),
      "data-never": dataAttr(isNever),
      "data-scroll": dataAttr(isScrolling),
      tabIndex: 0,
      onMouseEnter: handlerAll(
        props.onMouseEnter,
        rest.onMouseEnter,
        onMouseEnter,
      ),
      onMouseLeave: handlerAll(
        props.onMouseLeave,
        rest.onMouseLeave,
        onMouseLeave,
      ),
      onScroll: handlerAll(props.onScroll, rest.onScroll, onScroll),
    }),
    [
      isNever,
      ref,
      isHidden,
      isHovered,
      isScrolling,
      isSafari,
      safariProps,
      rest,
      onMouseEnter,
      onMouseLeave,
      onScroll,
    ],
  )

  return {
    isAlways,
    isHidden,
    isHovered,
    isNever,
    isScrolling,
    getRootProps,
  }
}

export type UseScrollAreaReturn = ReturnType<typeof useScrollArea>
