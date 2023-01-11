import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import { useControllableState } from '@yamada-ui/use-controllable-state'
import { createDescendant } from '@yamada-ui/use-descendant'
import { LazyMode } from '@yamada-ui/use-disclosure'
import { createContext, cx, findChildren, pickChildren, getValidChildren } from '@yamada-ui/utils'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { TabList, TabListProps, TabPanels, TabPanelsProps, Tab, TabPanel } from './'

const {
  DescendantsContextProvider,
  useDescendantsContext: useTabsDescendantsContext,
  useDescendants,
  useDescendant: useTabsDescendant,
} = createDescendant<HTMLButtonElement>()

export { useTabsDescendantsContext, useTabsDescendant }

type TabsContext = Omit<TabsOptions, 'index' | 'defaultIndex' | 'onChange'> & {
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  selectedIndex: number
  setSelectedIndex: Dispatch<SetStateAction<number>>
  styles: Record<string, CSSUIObject>
}

const [TabsProvider, useTabsContext] = createContext<TabsContext>({
  name: 'TabsContext',
  errorMessage: `useTabsContext returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />"`,
})

export { useTabsContext }

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

  const [focusedIndex, setFocusedIndex] = useState<number>(defaultIndex)

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
