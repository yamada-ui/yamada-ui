import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import {
  createDescendant,
  LazyMode,
  useControllableState,
  useLazyDisclosure,
  useClickable,
  UseClickableProps,
} from '@yamada-ui/hooks'
import {
  ariaAttr,
  createContext,
  cx,
  findChildren,
  pickChildren,
  getValidChildren,
  handlerAll,
  mergeRefs,
} from '@yamada-ui/utils'
import {
  createElement,
  Dispatch,
  KeyboardEvent,
  KeyboardEventHandler,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

const { DescendantsContextProvider, useDescendantsContext, useDescendants, useDescendant } =
  createDescendant<HTMLButtonElement>()

type TabsContext = Omit<TabsOptions, 'index' | 'defaultIndex' | 'onChange'> & {
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  selectedIndex: number
  setSelectedIndex: Dispatch<SetStateAction<number>>
  styles: Record<string, CSSUIObject>
}

const [TabsProvider, useTabsContext] = createContext<TabsContext>({
  name: 'TabsContext',
  errorMessage: `useTabsContext returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `,
})

const [TabPanelProvider, useTabPanelContext] = createContext<{
  isSelected: boolean
  selectedIndex: number
}>({})

type TabsOptions = {
  index?: number
  defaultIndex?: number
  isFitted?: boolean
  align?: 'start' | 'end' | 'center'
  isManual?: boolean
  isLazy?: boolean
  lazyBehavior?: LazyMode
  orientation?: 'vertical' | 'horizontal'
  onChange?: (index: number) => void
  tabList?: TabListProps
  tabPanels?: TabPanelsProps
}

export type TabsProps = Omit<HTMLUIProps<'div'>, 'onChange'> & ThemeProps<'Tabs'> & TabsOptions

export const Tabs = forwardRef<TabsProps, 'div'>(({ align = 'start', ...props }, ref) => {
  const styles = useMultiComponentStyle('Tabs', { align, ...props })
  const {
    className,
    index,
    defaultIndex = 0,
    onChange,
    isFitted,
    isManual,
    isLazy = true,
    lazyBehavior = 'keepMounted',
    orientation = 'horizontal',
    tabList,
    tabPanels,
    children,
    ...rest
  } = omitThemeProps(props)

  const [focusedIndex, setFocusedIndex] = useState(defaultIndex)

  const [selectedIndex, setSelectedIndex] = useControllableState({
    value: index,
    defaultValue: defaultIndex,
    onChange,
  })

  const descendants = useDescendants()

  const validChildren = getValidChildren(children)

  const [customTabList] = findChildren(validChildren, TabList)
  const [customTabPanels] = findChildren(validChildren, TabPanels)
  const cloneTabs = pickChildren(validChildren, Tab)
  const cloneTabPanels = pickChildren(validChildren, TabPanel)

  useEffect(() => {
    if (index != null) setFocusedIndex(index)
  }, [index])

  const css: CSSUIObject = { w: '100%', ...styles.container }

  return (
    <DescendantsContextProvider value={descendants}>
      <TabsProvider
        value={{
          focusedIndex,
          setFocusedIndex,
          selectedIndex,
          setSelectedIndex,
          isFitted,
          align,
          isManual,
          isLazy,
          lazyBehavior,
          orientation,
          tabList,
          tabPanels,
          styles,
        }}
      >
        <ui.div ref={ref} className={cx('ui-tabs', className)} __css={css} {...rest}>
          {customTabList ?? <TabList>{cloneTabs}</TabList>}
          {customTabPanels ?? <TabPanels>{cloneTabPanels}</TabPanels>}
        </ui.div>
      </TabsProvider>
    </DescendantsContextProvider>
  )
})

export type TabListProps = HTMLUIProps<'div'>

export const TabList = forwardRef<TabListProps, 'div'>(({ className, ...rest }, ref) => {
  const { focusedIndex, orientation, tabList, styles } = useTabsContext()

  const descendants = useDescendantsContext()

  const isVertical = orientation === 'vertical'

  const onNext = useCallback(() => {
    const next = descendants.enabledNextValue(focusedIndex)

    if (next) next.node?.focus()
  }, [descendants, focusedIndex])

  const onPrev = useCallback(() => {
    const prev = descendants.enabledPrevValue(focusedIndex)

    if (prev) prev.node?.focus()
  }, [descendants, focusedIndex])

  const onFirst = useCallback(() => {
    const first = descendants.enabledfirstValue()

    if (first) first.node?.focus()
  }, [descendants])

  const onLast = useCallback(() => {
    const last = descendants.enabledlastValue()

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

  const css: CSSUIObject = { display: 'flex', ...styles.tabList }

  return (
    <ui.div
      ref={ref}
      className={cx('ui-tabs-list', className)}
      __css={css}
      {...tabList}
      {...rest}
      onKeyDown={handlerAll(rest.onKeyDown, onKeyDown)}
    />
  )
})

export type TabProps = HTMLUIProps<'button'> & Omit<UseClickableProps, 'ref' | 'color'>

export const Tab = forwardRef<TabProps, 'button'>(
  ({ className, isDisabled, isFocusable, clickOnEnter, clickOnSpace, ...props }, ref) => {
    const { selectedIndex, isManual, setSelectedIndex, setFocusedIndex, styles } = useTabsContext()

    const { index, register } = useDescendant({
      disabled: isDisabled && !isFocusable,
    })

    const isSelected = index === selectedIndex

    const onClick = () => setSelectedIndex(index)

    const onFocus = () => {
      if (isDisabled) return

      setFocusedIndex(index)

      if (!isManual && !isFocusable) setSelectedIndex(index)
    }

    const rest = useClickable({
      ref: mergeRefs(register, ref),
      isDisabled,
      isFocusable,
      clickOnEnter,
      clickOnSpace,
      onClick: handlerAll(props.onClick, onClick),
    })

    const css: CSSUIObject = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: '0',
      ...styles.tab,
    }

    return (
      <ui.button
        className={cx('ui-tabs-tab', className)}
        __css={css}
        {...props}
        {...rest}
        type='button'
        tabIndex={isSelected ? 0 : -1}
        aria-selected={ariaAttr(isSelected)}
        onFocus={handlerAll(props.onFocus, onFocus)}
      />
    )
  },
)

export type TabPanelsProps = HTMLUIProps<'div'>

export const TabPanels = forwardRef<TabPanelsProps, 'div'>(
  ({ className, children, ...rest }, ref) => {
    const { selectedIndex, tabPanels, styles } = useTabsContext()

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child, index) => {
      const isSelected = index === selectedIndex

      return createElement(
        TabPanelProvider,
        { key: index, value: { isSelected, selectedIndex } },
        child,
      )
    })

    const css: CSSUIObject = {
      w: '100%',
      ...styles.tabPanels,
    }

    return (
      <ui.div
        ref={ref}
        className={cx('ui-tabs-panels', className)}
        __css={css}
        {...tabPanels}
        {...rest}
      >
        {cloneChildren}
      </ui.div>
    )
  },
)

export type TabPanelProps = HTMLUIProps<'div'>

export const TabPanel = forwardRef<TabPanelProps, 'div'>(
  ({ className, children, ...rest }, ref) => {
    const { isLazy: enabled, lazyBehavior: mode, styles } = useTabsContext()
    const { isSelected } = useTabPanelContext()

    const hasBeenSelected = useRef<boolean>(false)

    if (isSelected) hasBeenSelected.current = true

    const shouldRenderChildren = useLazyDisclosure({
      wasSelected: hasBeenSelected.current,
      isSelected,
      enabled,
      mode,
    })

    const css: CSSUIObject = { ...styles.tabPanel }

    return (
      <ui.div
        ref={ref}
        className={cx('ui-tabs-panel', className)}
        __css={css}
        {...rest}
        hidden={!isSelected}
      >
        {shouldRenderChildren ? children : null}
      </ui.div>
    )
  },
)
