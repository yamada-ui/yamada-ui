import type { PropGetter } from "../../core"
import type { MotionProps } from "../motion"
import { useCallback, useEffect, useRef } from "react"
import {
  ariaAttr,
  handlerAll,
  isArray,
  mergeRefs,
  useUpdateEffect,
} from "../../utils"
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
  const multi = isArray(value)

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

    const inView = viewTop <= childTop && childBottom <= viewBottom

    const scrollBottom = beforeFocusedIndex.current < selectedValue.index

    if (!inView) {
      if (childBottom <= parentHeight) {
        listRef.current.scrollTo({ top: 0 })
      } else {
        if (!scrollBottom) {
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
      "aria-multiselectable": ariaAttr(multi),
      role: "listbox",
      ...props,
      onAnimationComplete: handlerAll(
        props.onAnimationComplete,
        onAnimationComplete,
      ),
    }),
    [multi, onAnimationComplete],
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
