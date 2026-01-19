"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge, ReactNodeOrFunction } from "../../utils"
import type { NativeAccordionStyle } from "./native-accordion.style"
import type {
  UseNativeAccordionItemProps,
  UseNativeAccordionProps,
} from "./use-native-accordion"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { createContext, runIfFn, useSplitChildren } from "../../utils"
import { ChevronDownIcon } from "../icon"
import { nativeAccordionStyle } from "./native-accordion.style"
import {
  NativeAccordionContext,
  NativeAccordionDescendantsContext,
  NativeAccordionItemContext,
  useNativeAccordion,
  useNativeAccordionItem,
  useNativeAccordionItemContext,
} from "./use-native-accordion"

interface NativeAccordionCallBackProps {
  disabled?: boolean
  expanded?: boolean
}

export interface NativeAccordionItem
  extends Omit<NativeAccordionItemProps, "index"> {}

interface NativeAccordionComponentContext
  extends Pick<NativeAccordionRootProps, "icon" | "iconHidden"> {}

export interface NativeAccordionRootProps
  extends Omit<HTMLStyledProps, "onChange">,
    ThemeProps<NativeAccordionStyle>,
    UseNativeAccordionProps {
  /**
   * The accordion icon for all items to use.
   */
  icon?: ReactNodeOrFunction<NativeAccordionCallBackProps>
  /**
   * If `true`, hide the accordion icon for all items.
   *
   * @default false
   */
  iconHidden?: boolean
  /**
   * If provided, generate elements based on items.
   */
  items?: NativeAccordionItem[]
}

interface NativeAccordionItemComponentContext
  extends Pick<NativeAccordionItemProps, "icon"> {}

const [
  NativeAccordionItemComponentContext,
  useNativeAccordionItemComponentContext,
] = createContext<NativeAccordionItemComponentContext>({
  name: "NativeAccordionItemComponentContext",
})

const {
  ComponentContext,
  PropsContext: NativeAccordionPropsContext,
  useComponentContext,
  usePropsContext: useNativeAccordionPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  NativeAccordionRootProps,
  NativeAccordionStyle,
  NativeAccordionComponentContext
>("native-accordion", nativeAccordionStyle)

export { NativeAccordionPropsContext, useNativeAccordionPropsContext }

/**
 * `NativeAccordion` is a component for a list that displays information in an expandable or collapsible manner using the native HTML details element.
 *
 * @see https://yamada-ui.com/docs/components/native-accordion
 */
export const NativeAccordionRoot = withProvider<
  "div",
  NativeAccordionRootProps
>(({ children, icon, iconHidden, items, ...props }) => {
  const { name, descendants, index, multiple, setIndex, toggle, getRootProps } =
    useNativeAccordion(props)

  const computedChildren = useMemo(() => {
    if (children) return children

    return items?.map((props, index) => (
      <NativeAccordionItem key={index} index={index} {...props} />
    ))
  }, [children, items])

  const context = useMemo(
    () => ({
      name,
      index,
      multiple,
      setIndex,
      toggle,
    }),
    [name, index, multiple, setIndex, toggle],
  )

  const componentContext = useMemo(
    () => ({ icon, iconHidden }),
    [icon, iconHidden],
  )

  return (
    <NativeAccordionDescendantsContext value={descendants}>
      <NativeAccordionContext value={context}>
        <ComponentContext value={componentContext}>
          <styled.div {...getRootProps()}>{computedChildren}</styled.div>
        </ComponentContext>
      </NativeAccordionContext>
    </NativeAccordionDescendantsContext>
  )
}, "root")()

export interface NativeAccordionItemProps
  extends Merge<
    Omit<HTMLStyledProps<"details">, "children">,
    Omit<UseNativeAccordionItemProps, "children">
  > {
  /**
   * The accordion button to use.
   */
  button?: ReactNodeOrFunction<NativeAccordionCallBackProps>
  /**
   * The accordion children to use.
   */
  children?: ReactNodeOrFunction<NativeAccordionCallBackProps>
  /**
   * The accordion icon to use.
   */
  icon?: ReactNodeOrFunction<NativeAccordionCallBackProps>
}

export const NativeAccordionItem = withContext<
  "details",
  NativeAccordionItemProps
>(({ button, children, icon, ...rest }) => {
  const {
    disabled,
    open,
    getIconProps,
    getItemProps,
    getPanelProps,
    getSummaryProps,
  } = useNativeAccordionItem(rest)

  const computedChildren = useMemo(
    () => runIfFn(children, { disabled, expanded: open }),
    [children, disabled, open],
  )

  const [omittedChildren, customAccordionButton, customAccordionPanel] =
    useSplitChildren(
      computedChildren,
      NativeAccordionButton,
      NativeAccordionPanel,
    )

  const context = useMemo(
    () => ({
      disabled,
      open,
      getIconProps,
      getItemProps,
      getPanelProps,
      getSummaryProps,
    }),
    [
      disabled,
      getIconProps,
      getItemProps,
      getPanelProps,
      getSummaryProps,
      open,
    ],
  )

  const componentContext = useMemo(() => ({ icon }), [icon])

  return (
    <NativeAccordionItemContext value={context}>
      <NativeAccordionItemComponentContext value={componentContext}>
        <styled.details {...getItemProps()}>
          {customAccordionButton ?? (
            <NativeAccordionButton>
              {runIfFn(button, { disabled, expanded: open })}
            </NativeAccordionButton>
          )}
          {customAccordionPanel ?? (
            <NativeAccordionPanel>{omittedChildren}</NativeAccordionPanel>
          )}
        </styled.details>
      </NativeAccordionItemComponentContext>
    </NativeAccordionItemContext>
  )
}, "item")()

export interface NativeAccordionButtonProps
  extends HTMLStyledProps<"summary"> {}

export const NativeAccordionButton = withContext<
  "summary",
  NativeAccordionButtonProps
>(({ children, ...rest }) => {
  const { icon: rootIcon } = useComponentContext()
  const { icon: itemIcon } = useNativeAccordionItemComponentContext()
  const { disabled, open, getSummaryProps } = useNativeAccordionItemContext()
  const props = { disabled, expanded: open }

  return (
    <styled.summary {...getSummaryProps(rest)}>
      {children}

      <NativeAccordionIcon>
        {runIfFn(itemIcon, props) ?? runIfFn(rootIcon, props)}
      </NativeAccordionIcon>
    </styled.summary>
  )
}, "button")()

export interface NativeAccordionIconProps extends HTMLStyledProps<"span"> {}

export const NativeAccordionIcon = withContext<
  "span",
  NativeAccordionIconProps
>(({ children = <ChevronDownIcon />, ...rest }) => {
  const { iconHidden } = useComponentContext()
  const { getIconProps } = useNativeAccordionItemContext()

  if (iconHidden) return null

  return <styled.span {...getIconProps(rest)}>{children}</styled.span>
}, "icon")()

export interface NativeAccordionPanelProps extends HTMLStyledProps {}

export const NativeAccordionPanel = withContext<
  "div",
  NativeAccordionPanelProps
>(({ children, ...rest }) => {
  const { getPanelProps } = useNativeAccordionItemContext()

  return (
    <styled.div {...getPanelProps(rest)}>
      <styled.div>{children}</styled.div>
    </styled.div>
  )
}, "panel")()
