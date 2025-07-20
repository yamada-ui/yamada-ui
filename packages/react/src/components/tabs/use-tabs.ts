"use client"

import type { KeyboardEvent } from "react"
import type { HTMLProps, Orientation, PropGetter } from "../../core"
import { useCallback, useId, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendant } from "../../hooks/use-descendant"
import {
  createContext,
  cx,
  handlerAll,
  isUndefined,
  mergeRefs,
  runKeyAction,
  useUpdateEffect,
} from "../../utils"

const {
  DescendantsContext: TabDescendantsContext,
  useDescendant: useTabDescendant,
  useDescendants: useTabDescendants,
} = createDescendant<HTMLButtonElement>()

export { TabDescendantsContext, useTabDescendant, useTabDescendants }

const {
  DescendantsContext: TabPanelDescendantsContext,
  useDescendant: useTabPanelDescendant,
  useDescendants: useTabPanelDescendants,
} = createDescendant<HTMLDivElement>()

export {
  TabPanelDescendantsContext,
  useTabPanelDescendant,
  useTabPanelDescendants,
}

interface TabsContext
  extends Omit<
    UseTabsReturn,
    "getRootProps" | "tabDescendants" | "tabPanelDescendants"
  > {}

const [TabsContext, useTabsContext] = createContext<TabsContext>({
  name: "TabsContext",
})

export { TabsContext, useTabsContext }

export interface UseTabsProps extends Omit<HTMLProps, "onChange"> {
  /**
   * The index of the selected tab.
   */
  defaultIndex?: number
  /**
   * The index of the selected tab.
   */
  index?: number
  /**
   * If `true`, the tabs will be manually activated and display its panel by pressing Space or Enter.
   *
   * If `false`, the tabs will be automatically activated and their panel is displayed when they receive focus.
   *
   * @default false
   */
  manual?: boolean
  /**
   * The orientation of the tabs.
   *
   * @default 'horizontal'
   */
  orientation?: Orientation
  /**
   * The callback invoked when the index changes.
   */
  onChange?: (index: number) => void
}

export const useTabs = ({
  id,
  defaultIndex = 0,
  index: indexProp,
  manual = false,
  orientation = "horizontal",
  onChange,
  ...rest
}: UseTabsProps = {}) => {
  const uuid = useId()
  const tabDescendants = useTabDescendants()
  const tabPanelDescendants = useTabPanelDescendants()
  const [index, setIndex] = useControllableState({
    defaultValue: defaultIndex,
    value: indexProp,
    onChange,
  })
  const [focusedIndex, setFocusedIndex] = useState<number>(index)
  const horizontal = orientation === "horizontal"

  id ??= uuid

  const onFocusFirstTab = useCallback(() => {
    const first = tabDescendants.enabledFirstValue()

    if (first) first.node.focus()
  }, [tabDescendants])

  const onFocusLastTab = useCallback(() => {
    const last = tabDescendants.enabledLastValue()

    if (last) last.node.focus()
  }, [tabDescendants])

  const onFocusNextTab = useCallback(() => {
    const next = tabDescendants.enabledNextValue(focusedIndex)

    if (next) next.node.focus()
  }, [tabDescendants, focusedIndex])

  const onFocusPrevTab = useCallback(() => {
    const prev = tabDescendants.enabledPrevValue(focusedIndex)

    if (prev) prev.node.focus()
  }, [tabDescendants, focusedIndex])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      runKeyAction(ev, {
        ArrowDown: !horizontal ? onFocusNextTab : undefined,
        ArrowLeft: horizontal ? onFocusPrevTab : undefined,
        ArrowRight: horizontal ? onFocusNextTab : undefined,
        ArrowUp: !horizontal ? onFocusPrevTab : undefined,
        End: onFocusLastTab,
        Home: onFocusFirstTab,
      })
    },
    [
      horizontal,
      onFocusNextTab,
      onFocusPrevTab,
      onFocusLastTab,
      onFocusFirstTab,
    ],
  )

  useUpdateEffect(() => {
    if (isUndefined(indexProp)) return

    setIndex(indexProp)
    setFocusedIndex(indexProp)
  }, [indexProp])

  const getRootProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      "data-orientation": orientation,
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref),
    }),
    [orientation, rest],
  )

  const getListProps: PropGetter = useCallback(
    (props = {}) => ({
      "aria-orientation": orientation,
      role: "tablist",
      ...props,
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [orientation, onKeyDown],
  )

  return {
    id,
    focusedIndex,
    index,
    manual,
    orientation,
    setFocusedIndex,
    setIndex,
    tabDescendants,
    tabPanelDescendants,
    getListProps,
    getRootProps,
  }
}

export type UseTabsReturn = ReturnType<typeof useTabs>

export interface UseTabProps extends HTMLProps<"button"> {
  /**
   * The index of the tab.
   */
  index: number
}

export const useTab = ({ id, disabled, index, ...rest }: UseTabProps) => {
  const {
    id: rootId,
    index: selectedIndex,
    manual,
    orientation,
    setFocusedIndex,
    setIndex,
  } = useTabsContext()
  const { register } = useTabDescendant({ disabled })
  const tabPanelId = `${rootId}-panel-${index}`
  const selected = index === selectedIndex

  id ??= `${rootId}-tab-${index}`

  const onClick = useCallback(() => {
    if (!disabled) setIndex(index)
  }, [index, setIndex, disabled])

  const onFocus = useCallback(() => {
    if (disabled) return

    setFocusedIndex(index)

    if (!manual) setIndex(index)
  }, [setFocusedIndex, index, manual, disabled, setIndex])

  const getRootProps: PropGetter<"button"> = useCallback(
    ({ ref, ...props } = {}) => ({
      id,
      type: "button",
      "aria-controls": tabPanelId,
      "aria-selected": selected,
      "data-orientation": orientation,
      disabled,
      role: "tab",
      tabIndex: selected ? 0 : -1,
      ...rest,
      ...props,
      ref: mergeRefs(ref, register),
      onClick: handlerAll(props.onClick, rest.onClick, onClick),
      onFocus: handlerAll(props.onFocus, rest.onFocus, onFocus),
    }),
    [
      disabled,
      id,
      onClick,
      onFocus,
      orientation,
      register,
      rest,
      selected,
      tabPanelId,
    ],
  )

  return { index, selected, getRootProps }
}

export type UseTabReturn = ReturnType<typeof useTab>

export interface UseTabPanelProps extends HTMLProps {
  /**
   * The index of the tab panel.
   */
  index: number
}

export const useTabPanel = ({
  id,
  "aria-labelledby": ariaLabelledbyProp,
  index,
  ...rest
}: UseTabPanelProps) => {
  const { id: rootId, index: selectedIndex, orientation } = useTabsContext()
  const { register } = useTabPanelDescendant()
  const tabId = `${rootId}-tab-${index}`
  const selected = index === selectedIndex

  id ??= `${rootId}-panel-${index}`

  const getRootProps: PropGetter = useCallback(
    ({ ref, "aria-labelledby": ariaLabelledby, ...props } = {}) => ({
      id,
      "aria-labelledby": cx(ariaLabelledbyProp, ariaLabelledby, tabId),
      "data-orientation": orientation,
      hidden: !selected,
      role: "tabpanel",
      tabIndex: selected ? 0 : -1,
      ...rest,
      ...props,
      ref: mergeRefs(ref, register),
    }),
    [id, ariaLabelledbyProp, orientation, register, rest, selected, tabId],
  )

  return { index, selected, getRootProps }
}

export type UseTabPanelReturn = ReturnType<typeof useTabPanel>
