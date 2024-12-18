import type { PropGetter } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import {
  ariaAttr,
  handlerAll,
  isArray,
  mergeRefs,
  useUpdateEffect,
} from "@yamada-ui/utils"
import { useCallback, useEffect, useRef } from "react"
import {
  useAutocompleteContext,
  useAutocompleteDescendantsContext,
} from "./autocomplete-context"

export const useAutocompleteList = () => {
  const { focusedIndex, open, rebirthOptions, value } = useAutocompleteContext()
  const descendants = useAutocompleteDescendantsContext()
  const listRef = useRef<HTMLDivElement>(null)
  const beforeFocusedIndex = useRef<number>(-1)
  const selectedValue = descendants.value(focusedIndex)
  const isMulti = isArray(value)

  const onAnimationComplete = useCallback(() => {
    if (!open) rebirthOptions(false)
  }, [open, rebirthOptions])

  useEffect(() => {
    if (!listRef.current || !selectedValue) return

    if (beforeFocusedIndex.current === selectedValue.index) return

    const parent = listRef.current
    const child = selectedValue.node

    const parentHeight = parent.clientHeight
    const viewTop = parent.scrollTop
    const viewBottom = viewTop + parentHeight

    const childHeight = child.clientHeight
    const childTop = child.offsetTop
    const childBottom = childTop + childHeight

    const isInView = viewTop <= childTop && childBottom <= viewBottom

    const isScrollBottom = beforeFocusedIndex.current < selectedValue.index

    if (!isInView) {
      if (childBottom <= parentHeight) {
        listRef.current.scrollTo({ top: 0 })
      } else {
        if (!isScrollBottom) {
          listRef.current.scrollTo({ top: childTop + 1 })
        } else {
          listRef.current.scrollTo({ top: childBottom - parentHeight })
        }
      }
    }

    beforeFocusedIndex.current = selectedValue.index
  }, [listRef, selectedValue])

  useUpdateEffect(() => {
    if (!open) beforeFocusedIndex.current = -1
  }, [open])

  const getContainerProps: PropGetter<MotionProps, MotionProps> = useCallback(
    (props = {}, ref = null) => ({
      ref,
      "aria-multiselectable": ariaAttr(isMulti),
      role: "listbox",
      ...props,
      onAnimationComplete: handlerAll(
        props.onAnimationComplete,
        onAnimationComplete,
      ),
    }),
    [isMulti, onAnimationComplete],
  )

  const getListProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(listRef, ref),
      position: "relative",
      tabIndex: -1,
      ...props,
    }),
    [listRef],
  )

  return {
    getContainerProps,
    getListProps,
  }
}
