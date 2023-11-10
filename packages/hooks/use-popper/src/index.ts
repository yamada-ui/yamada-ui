import {
  createPopper,
  Instance,
  Modifier,
  VirtualElement,
  Placement,
} from "@popperjs/core"
import { Token } from "@yamada-ui/core"
import { useValue } from "@yamada-ui/use-value"
import { mergeRefs, PropGetter } from "@yamada-ui/utils"
import { useCallback, useEffect, useRef } from "react"

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
   * The boundary area for the popper. Used within the `preventOverflow` modifier.
   *
   * @default 'clippingParents'
   */
  boundary?: "clippingParents" | "scrollParent" | HTMLElement
  /**
   * If provided, determines whether the popper will reposition itself on `scroll`  and `resize` of the window.
   *
   * @default true
   */
  eventListeners?: boolean | { scroll?: boolean; resize?: boolean }
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
  modifiers?: Array<Partial<Modifier<string, any>>>
}

const defaultEventListeners = {
  scroll: true,
  resize: true,
}

const transforms: Record<string, string> = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",

  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",

  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",

  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom",
}

export const usePopper = ({
  enabled = true,
  eventListeners = true,
  matchWidth,
  offset,
  gutter: _gutter = 8,
  flip = true,
  preventOverflow = true,
  boundary = "clippingParents",
  strategy = "absolute",
  placement: _placement = "bottom",
  modifiers,
}: UsePopperProps = {}) => {
  const reference = useRef<Element | VirtualElement | null>(null)
  const popper = useRef<HTMLElement | null>(null)
  const instance = useRef<Instance | null>(null)

  const gutter = useValue(_gutter)
  const placement = useValue(_placement)

  const cleanup = useRef(() => {})

  const setupPopper = useCallback(() => {
    if (!enabled || !reference.current || !popper.current) return

    cleanup.current?.()

    const modifierTransformOrigin: Modifier<"transformOrigin", any> = {
      name: "transformOrigin",
      enabled: true,
      phase: "write",
      fn: ({ state }) => {
        state.elements.popper.style.setProperty(
          "--popper-transform-origin",
          transforms[state.placement],
        )
      },
      effect:
        ({ state }) =>
        () => {
          state.elements.popper.style.setProperty(
            "--popper-transform-origin",
            transforms[state.placement],
          )
        },
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
      enabled: !!matchWidth,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: ({ state }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`
      },
      effect:
        ({ state }) =>
        () => {
          state.elements.popper.style.width = `${
            (state.elements.reference as HTMLElement).offsetWidth
          }px`
        },
    }

    instance.current = createPopper(reference.current, popper.current, {
      placement,
      modifiers: [
        modifierTransformOrigin,
        modifierMatchWidth,
        modifierEventListeners,
        modifierOffset,
        modifierFlip,
        modifierPreventOverflow,
        ...(modifiers ?? []),
      ],
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
    <T extends Element | VirtualElement>(el: T | null) => {
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
    <T extends HTMLElement>(el: T | null) => {
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
        position: strategy,
        minWidth: matchWidth ? undefined : "max-content",
        inset: "0 auto auto 0",
      },
    }),
    [strategy, popperRef, matchWidth],
  )

  return {
    update: () => instance.current?.update(),
    forceUpdate: () => instance.current?.forceUpdate(),
    transformOrigin: "var(--popper-transform-origin)",
    referenceRef,
    popperRef,
    getPopperProps,
    getReferenceProps,
  }
}

export type UsePopperReturn = ReturnType<typeof usePopper>
