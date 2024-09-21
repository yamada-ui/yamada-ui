import type { PropGetter } from "@yamada-ui/core"
import { mergeRefs, useUpdateEffect } from "@yamada-ui/utils"
import { useCallback, useEffect, useId, useRef } from "react"
import {
  useAutocompleteContext,
  useAutocompleteDescendantsContext,
} from "./autocomplete-context"

export const useAutocompleteList = () => {
  const { focusedIndex, isOpen, listRef, rebirthOptions } =
    useAutocompleteContext()

  const descendants = useAutocompleteDescendantsContext()

  const beforeFocusedIndex = useRef<number>(-1)
  const selectedValue = descendants.value(focusedIndex)

  const onAnimationComplete = useCallback(() => {
    if (!isOpen) rebirthOptions(false)
  }, [isOpen, rebirthOptions])

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
    if (!isOpen) beforeFocusedIndex.current = -1
  }, [isOpen])

  const getListProps: PropGetter<"ul"> = useCallback(
    (props = {}, ref = null) => ({
      as: "ul",
      ref: mergeRefs(listRef, ref),
      role: "listbox",
      tabIndex: -1,
      position: "relative",
      id: props.id || useId(),
      ...props,
    }),
    [listRef],
  )

  return {
    onAnimationComplete,
    getListProps,
  }
}
