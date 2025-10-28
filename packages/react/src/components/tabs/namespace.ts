export {
  TabsList as List,
  TabsPanel as Panel,
  TabsPanels as Panels,
  TabsPropsContext as PropsContext,
  TabsRoot as Root,
  TabsTab as Tab,
  useTabsPropsContext as usePropsContext,
} from "./tabs"
export type {
  TabsItem as Item,
  TabsListProps as ListProps,
  TabsPanelProps as PanelProps,
  TabsPanelsProps as PanelsProps,
  TabsRootProps as RootProps,
  TabsTabProps as TabProps,
} from "./tabs"
export {
  TabsContext as Context,
  TabDescendantsContext as DescendantsContext,
  TabPanelDescendantsContext as PanelDescendantsContext,
  useTabsContext as useContext,
  useTabDescendant as useDescendant,
  useTabDescendants as useDescendants,
  useTabPanelDescendant as usePanelDescendant,
  useTabPanelDescendants as usePanelDescendants,
} from "./use-tabs"
