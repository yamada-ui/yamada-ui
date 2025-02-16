import type {
  Instance,
  Modifier,
  Placement,
  VirtualElement,
} from "@popperjs/core"
import type { PropGetter, Token } from "../../core"
import { createPopper } from "@popperjs/core"
import { useCallback, useEffect, useRef } from "react"
import { mergeRefs, noop } from "../../utils"
import { useValue } from "../use-value"

export type PopperProperty = (typeof popperProperties)[number]

export const popperProperties = [
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
] as const

export interface UsePopperProps {
  /**
   * The boundary area for the popper. Used within the `preventOverflow` modifier.
   *
   * @default 'clippingParents'
   */
  boundary?: "clippingParents" | "scrollParent" | HTMLElement
  /**
   * Whether the popper.js should be enabled.
   *
   * @default true
   */
  enabled?: boolean
  /**
   * If provided, determines whether the popper will reposition itself on `scroll`  and `resize` of the window.
   *
   * @default true
   */
  eventListeners?: boolean | { resize?: boolean; scroll?: boolean }
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
  gutter?: Token<number>
  /**
   * If `true`, the popper will match the width of the reference at all times.
   * It's useful for `autocomplete`, `date-picker` and `select` patterns.
   *
   * @default false
   */
  matchWidth?: boolean
  /**
   * Array of popper.js modifiers.
   * Check the docs to see the list of possible modifiers you can pass.
   *
   * @see Docs https://popper.js.org/docs/v2/modifiers/
   */
  modifiers?: Partial<Modifier<string, any>>[]
  /**
   * The main and cross-axis offset to displace popper element from its reference element.
   */
  offset?: [number, number]
  /**
   * The placement of the popper relative to its reference.
   *
   * @default 'bottom'
   */
  placement?: Token<Placement>
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
  strategy?: "absolute" | "fixed"
}

const defaultEventListeners = {
  resize: true,
  scroll: true,
}

const transforms: {
  [key in Placement]?: string
} = {
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

export const usePopper = ({
  boundary = "clippingParents",
  enabled = true,
  eventListeners = true,
  flip = true,
  gutter: _gutter = 8,
  matchWidth,
  modifiers,
  offset,
  placement: _placement = "bottom",
  preventOverflow = true,
  strategy = "absolute",
}: UsePopperProps = {}) => {
  const reference = useRef<Element | null | VirtualElement>(null)
  const popper = useRef<HTMLElement | null>(null)
  const instance = useRef<Instance | null>(null)

  const gutter = useValue(_gutter)
  const placement = useValue(_placement)

  const cleanup = useRef(noop)

  const setupPopper = useCallback(() => {
    if (!enabled || !reference.current || !popper.current) return

    cleanup.current()

    const modifierTransformOrigin: Modifier<"transformOrigin", any> = {
      name: "transformOrigin",
      effect:
        ({ state }) =>
        () => {
          state.elements.popper.style.setProperty(
            "--popper-transform-origin",
            transforms[state.placement] ?? "",
          )
        },
      enabled: true,
      fn: ({ state }) => {
        state.elements.popper.style.setProperty(
          "--popper-transform-origin",
          transforms[state.placement] ?? "",
        )
      },
      phase: "write",
    }

    const modifierEventListeners = {
      name: "eventListeners",
      ...(typeof eventListeners === "object"
        ? {
            enabled: true,
            options: { ...defaultEventListeners, ...eventListeners },
          }
        : {
            enabled: eventListeners,
            options: defaultEventListeners,
          }),
    }

    const modifierOffset = {
      name: "offset",
      options: { offset: offset ?? [0, gutter] },
    }

    const modifierFlip = {
      name: "flip",
      enabled: !!flip,
      options: { padding: 8 },
    }

    const modifierPreventOverflow = {
      name: "preventOverflow",
      enabled: !!preventOverflow,
      options: { boundary },
    }

    const modifierMatchWidth: Modifier<"matchWidth", any> = {
      name: "matchWidth",
      effect:
        ({ state }) =>
        () => {
          state.elements.popper.style.width = `${
            (state.elements.reference as HTMLElement).offsetWidth
          }px`
        },
      enabled: !!matchWidth,
      fn: ({ state }) => {
        if (state.styles.popper)
          state.styles.popper.width = `${state.rects.reference.width}px`
      },
      phase: "beforeWrite",
      requires: ["computeStyles"],
    }

    instance.current = createPopper(reference.current, popper.current, {
      modifiers: [
        modifierTransformOrigin,
        modifierMatchWidth,
        modifierEventListeners,
        modifierOffset,
        modifierFlip,
        modifierPreventOverflow,
        ...(modifiers ?? []),
      ],
      placement,
      strategy,
    })

    instance.current.forceUpdate()

    cleanup.current = instance.current.destroy
  }, [
    placement,
    enabled,
    modifiers,
    matchWidth,
    eventListeners,
    offset,
    gutter,
    flip,
    preventOverflow,
    boundary,
    strategy,
  ])

  useEffect(() => {
    return () => {
      if (reference.current || popper.current) return

      instance.current?.destroy()
      instance.current = null
    }
  }, [])

  const referenceRef = useCallback(
    <T extends Element | VirtualElement>(el: null | T) => {
      reference.current = el

      setupPopper()
    },
    [setupPopper],
  )

  const getReferenceProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(referenceRef, ref),
    }),
    [referenceRef],
  )

  const popperRef = useCallback(
    <T extends HTMLElement>(el: null | T) => {
      popper.current = el

      setupPopper()
    },
    [setupPopper],
  )

  const getPopperProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(popperRef, ref),
      style: {
        ...props.style,
        inset: "0 auto auto 0",
        minWidth: matchWidth ? undefined : "max-content",
        position: strategy,
      },
    }),
    [strategy, popperRef, matchWidth],
  )

  return {
    forceUpdate: () => instance.current?.forceUpdate(),
    popperRef,
    referenceRef,
    transformOrigin: "var(--popper-transform-origin)",
    update: async () => instance.current?.update(),
    getPopperProps,
    getReferenceProps,
  }
}

export type UsePopperReturn = ReturnType<typeof usePopper>
