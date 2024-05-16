import {
  autoUpdate,
  useFloating,
  offset,
  shift,
  flip,
} from "@floating-ui/react"
import type { Middleware, Placement } from "@floating-ui/react"
// import { useFloating, offset, flip, shift } from "@floating-ui/react-dom"
import type { Token } from "@yamada-ui/core"
import { useValue } from "@yamada-ui/use-value"
import type { PropGetter } from "@yamada-ui/utils"
import { mergeRefs } from "@yamada-ui/utils"
import { useCallback } from "react"

export const popperProperties: any[] = [
  "enabled",
  "offset",
  "gutter",
  "preventOverflow",
  "flip",
  "matchWidth",
  "boundary",
  "eventListeners",
  "strategy",
  "placement",
  "modifiers",
]

export type UsePopperProps = {
  /**
   * Whether the popper.js should be enabled.
   *
   * @default true
   */
  enabled?: boolean
  /**
   * The main and cross-axis offset to displace popper element from its reference element.
   */
  offset?: [number, number]
  /**
   * The distance or margin between the reference and popper.
   * It is used internally to create an `offset` modifier.
   *
   * @default 8
   */
  gutter?: Token<number>
  /**
   * If `true`, will prevent the popper from being cut off and ensure it's visible within the boundary area.
   *
   * @default true
   */
  preventOverflow?: boolean
  /**
   * If `true`, the popper will change its placement and flip when it's about to overflow its boundary area.
   *
   * @default true
   */
  flip?: boolean
  /**
   * If `true`, the popper will match the width of the reference at all times.
   * It's useful for `autocomplete`, `date-picker` and `select` patterns.
   *
   * @default false
   */
  matchWidth?: boolean
  /**
   * If provided, determines whether the popper will reposition itself on `scroll`  and `resize` of the window.
   *
   * @default true
   */
  eventListeners?: boolean
  /**
   * The CSS positioning strategy to use.
   *
   * @default 'absolute'
   */
  strategy?: "absolute" | "fixed"
  /**
   * The placement of the popper relative to its reference.
   *
   * @default 'bottom'
   */
  placement?: Token<Placement>
  /**
   * Array of popper.js modifiers.
   * Check the docs to see the list of possible modifiers you can pass.
   *
   * @see Docs https://popper.js.org/docs/v2/modifiers/
   */
  middlewares?: Array<Middleware>
}

export const usePopper = ({
  enabled = true,
  eventListeners = true,
  matchWidth,
  offset: _offset,
  gutter: _gutter = 8,
  flip: isFlip = true,
  preventOverflow = true,
  strategy = "absolute",
  placement: _placement = "bottom",
  middlewares,
}: UsePopperProps = {}) => {
  const placement = useValue(_placement)
  const gutter = useValue(_gutter)

  const {
    update: updateFloating,
    refs,
    floatingStyles,
  } = useFloating({
    strategy,
    placement,
    transform: true,
    open: enabled,
    middleware: [
      _offset
        ? offset({ mainAxis: _offset[0], crossAxis: _offset[1] })
        : gutter
          ? offset(gutter)
          : undefined,
      isFlip ? flip() : undefined,
      preventOverflow ? shift() : undefined,
      ...(middlewares || []),
    ],
    whileElementsMounted: eventListeners ? autoUpdate : undefined,
  })

  const referenceRef = refs.setReference

  const getReferenceProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(ref, referenceRef),
    }),
    [referenceRef],
  )

  const popperRef = refs.setFloating

  const getPopperProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(popperRef, ref),
      style: {
        ...props.style,
        position: strategy,
        minWidth: matchWidth ? undefined : "max-content",
        inset: "0 auto auto 0",
        ...floatingStyles,
      },
    }),
    [strategy, popperRef, matchWidth, floatingStyles],
  )

  return {
    update: () => updateFloating(),
    referenceRef,
    popperRef,
    getPopperProps,
    getReferenceProps,
  }
}

export type UsePopperReturn = ReturnType<typeof usePopper>
