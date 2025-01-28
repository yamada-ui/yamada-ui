import type { PropGetter } from "../../core"
import type { MotionProps } from "../motion"
import { useCallback, useEffect, useRef } from "react"
import { ariaAttr, handlerAll, isArray, mergeRefs } from "../../utils"
import { useSelectContext, useSelectDescendantsContext } from "./use-select"

export const useSelectList = () => {
  const { focusedIndex, open, value } = useSelectContext()
  const descendants = useSelectDescendantsContext()
  const listRef = useRef<HTMLDivElement>(null)
  const beforeFocusedIndex = useRef<number>(-1)
  const selectedValue = descendants.value(focusedIndex)
  const multi = isArray(value)

  const onAnimationComplete = useCallback(() => {
    if (!open) listRef.current?.scrollTo({ top: 0 })
  }, [open])

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

export type UseSelectListReturn = ReturnType<typeof useSelectList>
