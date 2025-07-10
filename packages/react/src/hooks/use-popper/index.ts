import type {
  Placement as FloatingPlacement,
  Middleware,
  Platform,
  Strategy,
  UseFloatingOptions,
  VirtualElement,
} from "@floating-ui/react-dom"
import type { ComponentRef, Ref } from "react"
import type {
  DOMElement,
  HTMLElementProps,
  HTMLProps,
  Placement,
} from "../../core"
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from "@floating-ui/react-dom"
import { useCallback, useMemo } from "react"
import { mergeRefs } from "../../utils"

export type PopperPlacement = Exclude<Placement, "center" | "center-center">

const PLACEMENT_MAP: {
  [key in PopperPlacement]: FloatingPlacement
} = {
  "center-end": "right",
  "center-start": "left",
  end: "bottom",
  "end-center": "bottom",
  "end-end": "bottom-end",
  "end-start": "bottom-start",
  start: "top",
  "start-center": "top",
  "start-end": "top-end",
  "start-start": "top-start",
}

type WhileElementsMounted = UseFloatingOptions["whileElementsMounted"]

type Reference<Y extends DOMElement | VirtualElement = "div"> =
  Y extends DOMElement ? ComponentRef<Y> : Y

export interface UsePopperProps<Y extends DOMElement | VirtualElement = "div"> {
  /**
   * If `true`, automatically updates the position of the floating element when necessary.
   *
   * @default true
   */
  autoUpdate?: boolean
  /**
   * Object containing the reference and floating elements.
   */
  elements?: {
    floating?: HTMLElement | null
    reference?: null | Reference<Y>
  }
  /**
   * If `true`, the popper will change its placement and flip when it's about to overflow its boundary area.
   *
   * @default true
   */
  flip?: boolean
  /**
   * The distance or margin between the reference and popper.
   * It is used internally to create an `offset` modifier.
   *
   * @default 8
   */
  gutter?: number
  /**
   * If `true`, the popper will match the width of the reference at all times.
   * It's useful for `autocomplete`, `date-picker` and `select` patterns.
   *
   * @default false
   */
  matchWidth?: boolean
  /**
   * Array of middleware objects to modify the positioning or provide data for
   * rendering.
   */
  middleware?: (false | Middleware | null | undefined)[]
  /**
   * The main and cross-axis offset to displace popper element from its reference element.
   */
  offset?: [number, number]
  /**
   * Whether the popper should be enabled.
   *
   * @default true
   */
  open?: boolean
  /**
   * The placement of the popper relative to its reference.
   *
   * @default 'start'
   */
  placement?: PopperPlacement
  /**
   * Custom or extended platform object.
   */
  platform?: Platform
  /**
   * If `true`, will prevent the popper from being cut off and ensure it's visible within the boundary area.
   *
   * @default true
   */
  preventOverflow?: boolean
  /**
   * The CSS positioning strategy to use.
   *
   * @default 'absolute'
   */
  strategy?: Strategy
  /**
   * Whether to use `transform` for positioning instead of `top` and `left`
   * (layout) in the `floatingStyles` object.
   *
   * @default true
   */
  transform?: boolean
  /**
   * A callback invoked when both the reference and floating elements are
   * mounted, and cleaned up when either is unmounted. This is useful for
   * setting up event listeners (e.g. pass `autoUpdate`).
   */
  whileElementsMounted?: (
    reference: Reference<Y>,
    floating: HTMLElement,
    update: () => void,
  ) => () => void
}

export const usePopper = <
  Y extends DOMElement | VirtualElement = "div",
  M extends DOMElement = "div",
>({
  autoUpdate: autoUpdateProp = true,
  elements,
  flip: flipProp = true,
  gutter = 8,
  matchWidth,
  middleware: middlewareProp,
  offset: offsetProp,
  open = true,
  placement = "start",
  platform,
  preventOverflow = true,
  strategy = "absolute",
  transform = true,
  whileElementsMounted: whileElementsMountedProp,
}: UsePopperProps = {}) => {
  const middleware = useMemo(() => {
    const middleware: (false | Middleware | null | undefined)[] = []

    if (offsetProp) {
      const [mainAxis, crossAxis] = offsetProp

      middleware.push(offset({ crossAxis, mainAxis }))
    } else if (gutter) {
      middleware.push(offset(gutter))
    }

    if (flipProp) middleware.push(flip())

    if (preventOverflow) middleware.push(shift())

    if (middlewareProp) middleware.push(...middlewareProp)

    return middleware
  }, [flipProp, gutter, middlewareProp, offsetProp, preventOverflow])
  const whileElementsMounted = useMemo(() => {
    if (whileElementsMountedProp)
      return whileElementsMountedProp as WhileElementsMounted

    if (autoUpdateProp) return autoUpdate
  }, [autoUpdateProp, whileElementsMountedProp])

  const { floatingStyles, refs, ...rest } = useFloating<Reference<Y>>({
    elements,
    middleware,
    open,
    placement: PLACEMENT_MAP[placement],
    platform,
    strategy,
    transform,
    whileElementsMounted,
  })

  const getReferenceProps = useCallback(
    <D extends DOMElement | VirtualElement = Y>(
      props?: D extends DOMElement ? HTMLProps<D> : HTMLElementProps,
    ) =>
      ({
        ...props,
        ref: mergeRefs(props?.ref as Ref<any>, refs.setReference),
      }) as D extends DOMElement ? HTMLProps<D> : HTMLElementProps,
    [refs.setReference],
  )

  const getPopperProps = useCallback(
    <H extends DOMElement = M>(props?: HTMLProps<H>) =>
      ({
        ...props,
        ref: mergeRefs(props?.ref as Ref<any>, refs.setFloating),
        style: {
          ...props?.style,
          minWidth: matchWidth ? undefined : "max-content",
          ...floatingStyles,
        },
      }) as HTMLProps<H>,
    [refs.setFloating, matchWidth, floatingStyles],
  )

  return {
    ...rest,
    refs,
    getPopperProps,
    getReferenceProps,
  }
}

export type UsePopperReturn = ReturnType<typeof usePopper>
