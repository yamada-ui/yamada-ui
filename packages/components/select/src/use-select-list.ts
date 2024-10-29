import type { PropGetter } from "@yamada-ui/core"
import { ariaAttr, isArray, mergeRefs } from "@yamada-ui/utils"
import { useCallback, useEffect, useId, useRef } from "react"
import { useSelectContext, useSelectDescendantsContext } from "./use-select"

export const useSelectList = () => {
  const { focusedIndex, listRef, value } = useSelectContext()
  const descendants = useSelectDescendantsContext()
  const uuid = useId()
  const beforeFocusedIndex = useRef<number>(-1)
  const selectedValue = descendants.value(focusedIndex)
  const isMulti = isArray(value)

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

  const getListProps: PropGetter = useCallback(
    ({ id, ...props } = {}, ref = null) => ({
      id: id ?? uuid,
      ref: mergeRefs(listRef, ref),
      "aria-multiselectable": ariaAttr(isMulti),
      position: "relative",
      role: "listbox",
      tabIndex: -1,
      ...props,
    }),
    [uuid, isMulti, listRef],
  )

  return {
    getListProps,
  }
}

export type UseSelectListReturn = ReturnType<typeof useSelectList>
