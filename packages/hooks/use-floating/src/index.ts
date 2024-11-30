import type {
  Alignment,
  AutoUpdateOptions,
  Boundary,
  Middleware,
  Placement,
  VirtualElement,
} from "@floating-ui/react-dom"
import type { PropGetter, Token } from "@yamada-ui/core"
import {
  autoPlacement,
  autoUpdate,
  computePosition,
  limitShift,
  flip as middlewareFlip,
  offset as middlewareOffset,
  shift as middlewareShift,
} from "@floating-ui/react-dom"
import { useValue } from "@yamada-ui/use-value"
import { mergeRefs, noop } from "@yamada-ui/utils"
import { useCallback, useEffect, useRef } from "react"

export interface UseFloatingProps {
  /**
   * The boundary area for the floating. Used within the `preventOverflow` modifier.
   *
   * @default 'clippingAncestors'
   */
  boundary?: Boundary
  /**
   * Whether the floating ui.js should be enabled.
   *
   * @default true
   */
  enabled?: boolean
  /**
   * If provided, determines whether the floating will reposition itself on `scroll`  and `resize` of the window.
   *
   * @default true
   */
  eventListeners?: { resize?: boolean; scroll?: boolean } | boolean
  /**
   * If `true`, the floating will change its placement and flip when it's about to overflow its boundary area.
   *
   * @default true
   */
  flip?: boolean
  /**
   * The distance or margin between the reference and floating.
   * It is used internally to create an `offset` modifier.
   *
   * @default 8
   */
  gutter?: Token<number>
  /**
   * If `true`, the floating will match the width of the reference at all times.
   * It's useful for `autocomplete`, `date-picker` and `select` patterns.
   *
   * @default false
   */
  matchWidth?: boolean
  /**
   * Array of floating ui middlewares
   * Check the docs to see the list of possible middlewares you can pass.
   *
   * @see Docs https://floating-ui.com/docs/middleware
   */
  middlewares?: Middleware[]
  /**
   * The main and cross-axis offset to displace floating element from its reference element.
   */
  offset?: [number, number]
  /**
   * The placement of the floating relative to its reference.
   *
   * @default 'bottom'
   */
  placement?: Token<"auto" | "auto-end" | "auto-start" | Placement>
  /**
   * If `true`, will prevent the floating from being cut off and ensure it's visible within the boundary area.
   *
   * @default true
   */
  preventOverflow?: boolean
  /**
   * The CSS positioning strategy to use.
   *
   * @default 'absolute'
   */
  strategy?: "absolute" | "fixed"
}

const transforms: { [key in Placement]?: string } = {
  bottom: "top center",
  "bottom-end": "top right",
  "bottom-start": "top left",

  left: "right center",
  "left-end": "right bottom",
  "left-start": "right top",

  right: "left center",
  "right-end": "left bottom",
  "right-start": "left top",

  top: "bottom center",
  "top-end": "bottom right",
  "top-start": "bottom left",
}

export const useFloating = ({
  boundary = "clippingAncestors",
  enabled = true,
  eventListeners = true,
  flip = true,
  gutter: _gutter = 8,
  matchWidth,
  middlewares,
  offset,
  placement: _placement = "bottom",
  preventOverflow = true,
  strategy = "absolute",
}: UseFloatingProps) => {
  const reference = useRef<Element | null | VirtualElement>(null)
  const floating = useRef<HTMLElement | null>(null)

  const gutter = useValue(_gutter)
  const placement = useValue(_placement)

  const isAutoPlacement =
    placement === "auto" ||
    placement === "auto-start" ||
    placement === "auto-end"
  const isFlip = flip && !isAutoPlacement

  const cleanup = useRef(noop)
  const update = useRef(noop)

  const setupFloating = useCallback(() => {
    if (!enabled || !reference.current || !floating.current) return
    cleanup.current()

    const middlewareTransformOrigin: Middleware = {
      name: "transformOrigin",
      fn: (state) => {
        state.elements.floating.style.setProperty(
          "--floating-transform-origin",
          transforms[state.placement] ?? "",
        )
        return {}
      },
    }

    const middlewareMatchWidth: Middleware = {
      name: "matchWidth",
      fn: (state) => {
        state.elements.floating.style.width = `${state.rects.reference.width}px`
        return {}
      },
    }

    const update = () => {
      if (!enabled || !reference.current || !floating.current) return // eslint-disable-line
      computePosition(reference.current, floating.current, {
        middleware: [
          middlewareOffset({
            ...(offset
              ? { crossAxis: offset[1], mainAxis: offset[0] }
              : { mainAxis: gutter }),
          }),
          preventOverflow &&
            middlewareShift({
              boundary,
              limiter: limitShift(),
            }),
          isFlip &&
            middlewareFlip({
              padding: 8,
            }),
          ...(middlewares ?? []),
          middlewareTransformOrigin,
          matchWidth ? middlewareMatchWidth : null,
          isAutoPlacement &&
            autoPlacement({
              alignment: placement.split("-")[1] as Alignment,
            }),
        ],
        ...(!isAutoPlacement && { placement }),
        strategy,
      }).then(({ x, y }) => {
        floating.current?.style.setProperty("left", `${x}px`)
        floating.current?.style.setProperty("top", `${y}px`)
      })
    }

    const autoUpdateOptions: AutoUpdateOptions =
      typeof eventListeners === "object"
        ? {
            ancestorResize: eventListeners.resize,
            ancestorScroll: eventListeners.scroll,
            elementResize: eventListeners.resize,
          }
        : typeof eventListeners === "boolean"
          ? {
              ancestorResize: eventListeners,
              ancestorScroll: eventListeners,
              elementResize: eventListeners,
            }
          : {}

    update.current = update
    cleanup.current = autoUpdate(reference.current, floating.current, update, {
      ...autoUpdateOptions,
    })
  }, [
    placement,
    enabled,
    middlewares,
    matchWidth,
    eventListeners,
    offset,
    gutter,
    preventOverflow,
    boundary,
    strategy,
    isAutoPlacement,
    isFlip,
  ])

  useEffect(() => {
    return () => {
      if (reference.current || floating.current) return

      cleanup.current()
    }
  })

  const referenceRef = useCallback(
    <T extends Element | VirtualElement>(el: null | T) => {
      reference.current = el
      setupFloating()
    },
    [setupFloating],
  )

  const getReferenceProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(referenceRef, ref),
    }),
    [referenceRef],
  )

  const floatingRef = useCallback(
    <T extends HTMLElement>(el: null | T) => {
      floating.current = el
      setupFloating()
    },
    [setupFloating],
  )

  const getFloatingProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(floatingRef, ref),
      style: {
        ...props.style,
        inset: "0 auto auto 0",
        minWidth: matchWidth ? undefined : "max-content",
        position: strategy,
      },
    }),
    [floatingRef, matchWidth, strategy],
  )

  return {
    floatingRef,
    referenceRef,
    transformOrigin: "var(--floating-transform-origin)",
    update: () => update.current(),
    getFloatingProps,
    getReferenceProps,
  }
}
