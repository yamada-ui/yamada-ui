import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { KeyboardEvent, KeyboardEventHandler } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx, handlerAll } from "@yamada-ui/utils"
import { useCallback } from "react"
import { useTabsContext, useTabsDescendantsContext } from "./tabs-context"

export interface TabListProps extends HTMLUIProps {}

export const TabList = forwardRef<TabListProps, "div">(
  ({ className, ...rest }, ref) => {
    const { focusedIndex, orientation, styles, tabListProps } = useTabsContext()

    const descendants = useTabsDescendantsContext()

    const isVertical = orientation === "vertical"

    const onNext = useCallback(() => {
      const next = descendants.enabledNextValue(focusedIndex)

      if (next) next.node.focus()
    }, [descendants, focusedIndex])

    const onPrev = useCallback(() => {
      const prev = descendants.enabledPrevValue(focusedIndex)

      if (prev) prev.node.focus()
    }, [descendants, focusedIndex])

    const onFirst = useCallback(() => {
      const first = descendants.enabledFirstValue()

      if (first) first.node.focus()
    }, [descendants])

    const onLast = useCallback(() => {
      const last = descendants.enabledLastValue()

      if (last) last.node.focus()
    }, [descendants])

    const onKeyDown = useCallback(
      (ev: KeyboardEvent) => {
        const actions: { [key: string]: KeyboardEventHandler } = {
          ArrowDown: () => (isVertical ? onNext() : {}),
          ArrowLeft: () => (!isVertical ? onPrev() : {}),
          ArrowRight: () => (!isVertical ? onNext() : {}),
          ArrowUp: () => (isVertical ? onPrev() : {}),
          End: onLast,
          Home: onFirst,
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()
        action(ev)
      },
      [onFirst, onLast, isVertical, onPrev, onNext],
    )

    const css: CSSUIObject = { display: "flex", ...styles.tabList }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-tabs__list", className)}
        role="tablist"
        aria-orientation={orientation}
        __css={css}
        {...tabListProps}
        {...rest}
        onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
      />
    )
  },
)

TabList.displayName = "TabList"
TabList.__ui__ = "TabList"
