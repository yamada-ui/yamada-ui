import type { HTMLUIProps } from "@yamada-ui/core"
import type { MotionPropsWithoutChildren } from "@yamada-ui/motion"
import type { KeyboardEvent, KeyboardEventHandler } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { PopoverContent } from "@yamada-ui/popover"
import { cx, handlerAll, mergeRefs } from "@yamada-ui/utils"
import { useCallback } from "react"
import { useMenu, useMenuDescendantsContext } from "./menu-context"

export interface MenuListProps extends HTMLUIProps<"ul"> {
  contentProps?: MotionPropsWithoutChildren
}

export const MenuList = forwardRef<MenuListProps, "ul">(
  ({ className, children, contentProps, ...rest }, ref) => {
    const { focusedIndex, menuRef, setFocusedIndex, styles, onClose } =
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
        const actions: { [key: string]: KeyboardEventHandler } = {
          ArrowDown: focusedIndex === -1 ? onFirst : onNext,
          ArrowUp: focusedIndex === -1 ? onLast : onPrev,
          End: onLast,
          Escape: onClose,
          Home: onFirst,
          Tab: (ev) => ev.preventDefault(),
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
          className={cx("ui-menu__list", className)}
          role="menu"
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
