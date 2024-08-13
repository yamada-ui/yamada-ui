import type { HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { PopoverContent } from "@yamada-ui/popover"
import { cx, handlerAll, mergeRefs } from "@yamada-ui/utils"
import type { KeyboardEvent, KeyboardEventHandler } from "react"
import { useCallback } from "react"
import { useMenu, useMenuDescendantsContext } from "./menu"

export type MenuListProps = HTMLUIProps<"ul"> & {
  contentProps?: Omit<MotionProps<"div">, "children">
}

export const MenuList = forwardRef<MenuListProps, "ul">(
  ({ className, contentProps, children, ...rest }, ref) => {
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
      const first = descendants.enabledFirstValue()

      if (first) setFocusedIndex(first.index)
    }, [descendants, setFocusedIndex])

    const onLast = useCallback(() => {
      const last = descendants.enabledLastValue()

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

    return (
      <PopoverContent
        as="div"
        className="ui-menu__content"
        __css={{ ...styles.content }}
        {...contentProps}
        onKeyDown={handlerAll(contentProps?.onKeyDown, onKeyDown)}
      >
        <ui.ul
          ref={mergeRefs(menuRef, ref)}
          role="menu"
          className={cx("ui-menu__list", className)}
          tabIndex={-1}
          __css={{ ...styles.list }}
          {...rest}
        >
          {children}
        </ui.ul>
      </PopoverContent>
    )
  },
)
