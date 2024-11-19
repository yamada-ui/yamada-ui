import type { VirtualElement } from "@floating-ui/react-dom"
import type { PropGetter, Token } from "@yamada-ui/core"
import { autoUpdate, computePosition } from "@floating-ui/react-dom"
import { mergeRefs, noop } from "@yamada-ui/utils"
import { useCallback, useEffect, useRef } from "react"

export interface UseFloatingProps {
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
  eventListeners?: { resize?: boolean; scroll?: boolean } | boolean
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
  // modifiers?: Partial<Modifier<string, any>>[]
  /**
   * The main and cross-axis offset to displace popper element from its reference element.
   */
  offset?: [number, number]
  /**
   * The placement of the popper relative to its reference.
   *
   * @default 'bottom'
   */
  // placement?: Token<Placement>
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

// 破壊的変更(deprecated)などは報告する
// なるはや！

export const useFloating = ({
  // boundary = "clippingParents",
  enabled = true,
  // eventListeners = true,
  // flip = true,
  // gutter: _gutter = 8,
  // matchWidth,
  // offset,
  // placement: _placement = "bottom",
  // preventOverflow = true,
  // strategy = "absolute",
}: UseFloatingProps) => {
  const reference = useRef<Element | null | VirtualElement>(null)
  const floating = useRef<HTMLElement | null>(null)

  // const gutter = useValue(_gutter)
  // const placement = useValue(_placement)

  const cleanup = useRef(noop)

  const setupFloating = useCallback(() => {
    if (!enabled || !reference.current || !floating.current) return
    const update = () => {
      // if (!enabled || !reference.current || !floating.current) return
      computePosition(reference.current, floating.current, {}).then(
        ({ x, y }) => {
          floating.current?.style.setProperty("left", `${x}px`)
          floating.current?.style.setProperty("top", `${y}px`)
          // console.log(x, y)
        },
      )
    }

    cleanup.current = autoUpdate(reference.current, floating.current, update)
  }, [enabled])

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
    }),
    [floatingRef],
  )

  return {
    floatingRef,
    referenceRef,
    getFloatingProps,
    getReferenceProps,
  }
}
