import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { forwardRef } from "@yamada-ui/core"
import { PopoverContent } from "@yamada-ui/popover"
import { cx, handlerAll, mergeRefs } from "@yamada-ui/utils"
import type { KeyboardEvent, KeyboardEventHandler } from "react"
import { useCallback } from "react"
import { useMenu, useMenuDescendantsContext } from "./menu"

export type MenuListProps = HTMLUIProps<"section">

export const MenuList = forwardRef<MenuListProps, "section">(
  ({ className, ...rest }, ref) => {
    const { menuRef, focusedIndex, setFocusedIndex, onClose, styles } =
      useMenu()

    const descendants = useMenuDescendantsContext()

    const onNext = useCallback(() => {
      const next = descendants.enabledNextValue(focusedIndex)

      if (next) setFocusedIndex(next.index)
    }, [descendants, focusedIndex, setFocusedIndex])

    const onPrev = useCallback(() => {
      const prev = descendants.enabledPrevValue(focusedIndex)

      if (prev) setFocusedIndex(prev.index)
    }, [descendants, focusedIndex, setFocusedIndex])

    const onFirst = useCallback(() => {
      const first = descendants.enabledfirstValue()

      if (first) setFocusedIndex(first.index)
    }, [descendants, setFocusedIndex])

    const onLast = useCallback(() => {
      const last = descendants.enabledlastValue()

      if (last) setFocusedIndex(last.index)
    }, [descendants, setFocusedIndex])

    const onKeyDown = useCallback(
      (ev: KeyboardEvent) => {
        const actions: Record<string, KeyboardEventHandler> = {
          Tab: (ev) => ev.preventDefault(),
          Escape: onClose,
          ArrowDown: focusedIndex === -1 ? onFirst : onNext,
          ArrowUp: focusedIndex === -1 ? onLast : onPrev,
          Home: onFirst,
          End: onLast,
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()
        action(ev)
      },
      [focusedIndex, onClose, onFirst, onLast, onNext, onPrev],
    )

    const css: CSSUIObject = { ...styles.list }

    return (
      <PopoverContent
        ref={mergeRefs(menuRef, ref)}
        className={cx("ui-menu__list", className)}
        role="menu"
        tabIndex={-1}
        __css={css}
        {...rest}
        onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
      />
    )
  },
)
