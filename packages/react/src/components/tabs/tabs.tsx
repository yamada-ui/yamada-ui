import type {
  Dispatch,
  KeyboardEvent,
  KeyboardEventHandler,
  SetStateAction,
} from "react"
import type { FC, HTMLUIProps, ThemeProps } from "../../core"
import type { UseClickableProps } from "../../hooks/use-clickable"
import type { LazyMode } from "../../hooks/use-disclosure"
import type { Merge } from "../../utils"
import type { TabsStyle } from "./tabs.style"
import {
  createElement,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import { createSlotComponent, ui } from "../../core"
import { useClickable } from "../../hooks/use-clickable"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useLazyDisclosure } from "../../hooks/use-disclosure"
import {
  findChild,
  getValidChildren,
  handlerAll,
  mergeRefs,
  pickChildren,
} from "../../utils"
import { Ripple, useRipple } from "../ripple"
import {
  TabDescendantsContext,
  TabPanelContext,
  TabPanelDescendantsContext,
  useTabDescendant,
  useTabDescendants,
  useTabDescendantsContext,
  useTabPanelContext,
  useTabPanelDescendant,
  useTabPanelDescendants,
} from "./tabs-context"
import { tabsStyle } from "./tabs.style"

export interface TabsRootProps
  extends Omit<HTMLUIProps, "onChange">,
    ThemeProps<TabsStyle> {
  /**
   * The index of the selected tab.
   */
  defaultIndex?: number
  /**
   * If `true`, disable ripple effects when pressing the tab.
   *
   * @default false
   */
  disableRipple?: boolean
  /**
   * The index of the selected tab.
   */
  index?: number
  /**
   * If `true`, rendering of the tab panel's will be deferred until it is selected.
   *
   * @default true
   */
  lazy?: boolean
  /**
   * The lazy behavior of tab panels' content when not active. Only works when `isLazy={true}`.
   *
   * - `unmount`: The content of inactive tab panels are always unmounted.
   * - `keepMounted`: The content of inactive tab panels is initially unmounted, but stays mounted when selected.
   *
   * @default 'unmount'
   */
  lazyBehavior?: LazyMode
  /**
   * If `true`, the tabs will be manually activated and display its panel by pressing Space or Enter.
   *
   * If `false`, the tabs will be automatically activated and their panel is displayed when they receive focus.
   *
   * @default false
   */
  manual?: boolean
  /**
   * Props for tab list component.
   */
  tabListProps?: TabListProps
  /**
   * Props for tab panels components.
   */
  tabPanelsProps?: TabPanelsProps
  /**
   * The callback invoked when the index changes.
   */
  onChange?: (index: number) => void
}

interface TabsContext
  extends Omit<TabsRootProps, "defaultIndex" | "index" | "onChange"> {
  disableRipple: boolean
  focusedIndex: number
  selectedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  setSelectedIndex: Dispatch<SetStateAction<number>>
}

export const {
  ComponentContext: TabsContext,
  PropsContext: TabsPropsContext,
  useComponentContext: useTabsContext,
  usePropsContext: useTabsPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<TabsRootProps, TabsStyle, TabsContext>(
  "tabs",
  tabsStyle,
)

/**
 * `Tabs` is a component for switching between different display areas.
 *
 * @see Docs https://yamada-ui.com/components/tabs
 */
export const TabsRoot: FC<TabsRootProps> = withProvider(
  ({
    children,
    defaultIndex = 0,
    disableRipple = false,
    index,
    lazy = true,
    lazyBehavior = "keepMounted",
    manual,
    orientation = "horizontal",
    tabListProps,
    tabPanelsProps,
    onChange,
    ...rest
  }) => {
    const [focusedIndex, setFocusedIndex] = useState<number>(defaultIndex)
    const [selectedIndex, setSelectedIndex] = useControllableState({
      defaultValue: defaultIndex,
      value: index,
      onChange,
    })
    const tabDescendants = useTabDescendants()
    const tabPanelDescendants = useTabPanelDescendants()
    const validChildren = getValidChildren(children)
    const customTabList = findChild(validChildren, TabList)
    const customTabPanels = findChild(validChildren, TabPanels)
    const cloneTabs = pickChildren(validChildren, Tab)
    const cloneTabPanels = pickChildren(validChildren, TabPanel)

    useEffect(() => {
      if (index != null) setFocusedIndex(index)
    }, [index])

    return (
      <TabDescendantsContext value={tabDescendants}>
        <TabPanelDescendantsContext value={tabPanelDescendants}>
          <TabsContext
            value={{
              disableRipple,
              focusedIndex,
              lazy,
              lazyBehavior,
              manual,
              orientation,
              selectedIndex,
              setFocusedIndex,
              setSelectedIndex,
              tabListProps,
              tabPanelsProps,
            }}
          >
            <ui.div {...rest}>
              {customTabList ?? <TabList>{cloneTabs}</TabList>}
              {customTabPanels ?? <TabPanels>{cloneTabPanels}</TabPanels>}
            </ui.div>
          </TabsContext>
        </TabPanelDescendantsContext>
      </TabDescendantsContext>
    )
  },
  "root",
  { transferProps: ["orientation"] },
)()

export interface TabListProps extends HTMLUIProps {}

export const TabList = withContext<"div", TabListProps>((props) => {
  const { focusedIndex, orientation, tabListProps } = useTabsContext()
  const descendants = useTabDescendantsContext()
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

  return (
    <ui.div
      aria-orientation={orientation}
      role="tablist"
      {...tabListProps}
      {...props}
      onKeyDown={handlerAll(props.onKeyDown, onKeyDown)}
    />
  )
}, "tabList")()

export interface TabProps
  extends Merge<UseClickableProps<HTMLButtonElement>, HTMLUIProps<"button">> {}

export const Tab = withContext<"button", TabProps>(
  ({
    id,
    ref,
    children,
    clickOnEnter,
    clickOnSpace,
    disabled,
    focusable,
    ...rest
  }) => {
    const uuid = useId()
    const {
      disableRipple,
      manual,
      orientation,
      selectedIndex,
      setFocusedIndex,
      setSelectedIndex,
    } = useTabsContext()
    const { index, register } = useTabDescendant({
      disabled: disabled && !focusable,
    })
    const { descendants } = useTabPanelDescendant()
    const tabpanelId = descendants.value(index)?.node.id
    const isSelected = index === selectedIndex

    id ??= uuid

    const onFocus = () => {
      setFocusedIndex(index)

      if (!manual && !(disabled && focusable)) setSelectedIndex(index)
    }

    const clickableProps = useClickable<HTMLButtonElement>({
      id,
      "aria-controls": tabpanelId,
      "aria-selected": isSelected,
      role: "tab",
      ...rest,
      ref: mergeRefs(register, ref),
      clickOnEnter,
      clickOnSpace,
      disabled,
      focusable,
      onClick: handlerAll(rest.onClick, () => setSelectedIndex(index)),
      onFocus: disabled ? undefined : handlerAll(rest.onFocus, onFocus),
    })
    const { onClick, ...rippleProps } = useRipple({
      ...clickableProps,
      disabled: disableRipple || disabled,
    })

    return (
      <ui.button
        {...clickableProps}
        type="button"
        data-orientation={orientation}
        tabIndex={isSelected ? 0 : -1}
        onClick={onClick}
      >
        {children}

        <Ripple {...rippleProps} />
      </ui.button>
    )
  },
  "tab",
)()

export interface TabPanelsProps extends HTMLUIProps {}

export const TabPanels = withContext<"div", TabPanelsProps>(
  ({ children, ...rest }) => {
    const { selectedIndex, tabPanelsProps } = useTabsContext()
    const validChildren = getValidChildren(children)
    const cloneChildren = validChildren.map((child, index) => {
      const selected = index === selectedIndex

      return createElement(
        TabPanelContext,
        { key: index, value: { index, selected, selectedIndex } },
        child,
      )
    })

    return (
      <ui.div {...tabPanelsProps} {...rest}>
        {cloneChildren}
      </ui.div>
    )
  },
  "tabPanels",
)()

export interface TabPanelProps extends HTMLUIProps {}

export const TabPanel = withContext<"div", TabPanelProps>(
  ({ id, ref, children, ...rest }) => {
    const uuid = useId()
    const { lazy: enabled, lazyBehavior: mode } = useTabsContext()
    const { index, selected } = useTabPanelContext()
    const { register } = useTabPanelDescendant()
    const { descendants } = useTabDescendant()
    const hasBeenSelected = useRef<boolean>(false)
    const tabId = descendants.value(index)?.node.id

    if (selected) hasBeenSelected.current = true

    const shouldRenderChildren = useLazyDisclosure({
      enabled,
      mode,
      selected,
      wasSelected: hasBeenSelected.current,
    })

    id ??= uuid

    return (
      <ui.div
        id={id}
        ref={mergeRefs(register, ref)}
        aria-labelledby={tabId}
        role="tabpanel"
        {...rest}
        hidden={!selected}
      >
        {shouldRenderChildren ? children : null}
      </ui.div>
    )
  },
  "tabPanel",
)()
