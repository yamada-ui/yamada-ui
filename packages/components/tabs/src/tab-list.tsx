import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx, handlerAll } from "@yamada-ui/utils"
import type { KeyboardEvent, KeyboardEventHandler } from "react"
import { useCallback } from "react"
import { useTabsContext, useTabsDescendantsContext } from "./tabs"

export type TabListProps = HTMLUIProps<"div">

export const TabList = forwardRef<TabListProps, "div">(
  ({ className, ...rest }, ref) => {
    const { focusedIndex, orientation, tabListProps, styles } = useTabsContext()

    const descendants = useTabsDescendantsContext()

    const isVertical = orientation === "vertical"

    const onNext = useCallback(() => {
      const next = descendants.enabledNextValue(focusedIndex)

      if (next) next.node?.focus()
    }, [descendants, focusedIndex])

    const onPrev = useCallback(() => {
      const prev = descendants.enabledPrevValue(focusedIndex)

      if (prev) prev.node?.focus()
    }, [descendants, focusedIndex])

    const onFirst = useCallback(() => {
      const first = descendants.enabledFirstValue()

      if (first) first.node?.focus()
    }, [descendants])

    const onLast = useCallback(() => {
      const last = descendants.enabledLastValue()

      if (last) last.node?.focus()
    }, [descendants])

    const onKeyDown = useCallback(
      (ev: KeyboardEvent) => {
        const actions: Record<string, KeyboardEventHandler> = {
          ArrowLeft: () => (!isVertical ? onPrev() : {}),
          ArrowRight: () => (!isVertical ? onNext() : {}),
          ArrowDown: () => (isVertical ? onNext() : {}),
          ArrowUp: () => (isVertical ? onPrev() : {}),
          Home: onFirst,
          End: onLast,
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
        __css={css}
        {...tabListProps}
        {...rest}
        onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
      />
    )
  },
)
