"use client"

import type { ReactNode } from "react"
import type { HTMLProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { NativeAccordionStyle } from "./native-accordion.style"
import type {
  UseNativeAccordionItemProps,
  UseNativeAccordionItemReturn,
  UseNativeAccordionProps,
} from "./use-native-accordion"
import { Children, cloneElement, isValidElement, useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { createContext, useSplitChildren } from "../../utils"
import { ChevronDownIcon } from "../icon"
import { nativeAccordionStyle } from "./native-accordion.style"
import {
  NativeAccordionContext,
  useNativeAccordion,
  useNativeAccordionItem,
} from "./use-native-accordion"

export interface NativeAccordionItem extends NativeAccordionItemProps {}

interface ComponentContext
  extends Pick<NativeAccordionRootProps, "icon" | "iconHidden"> {}

export interface NativeAccordionRootProps
  extends Omit<HTMLStyledProps, "onChange">,
    ThemeProps<NativeAccordionStyle>,
    UseNativeAccordionProps {
  /**
   * The accordion icon for all items to use.
   */
  icon?: ReactNode
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

interface ItemComponentContext
  extends Pick<NativeAccordionItemProps, "icon">,
    Omit<UseNativeAccordionItemReturn, "getItemProps"> {}

const [ItemComponentContext, useItemComponentContext] =
  createContext<ItemComponentContext>({
    name: "ItemComponentContext",
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
  ComponentContext
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
  const { name, getRootProps } = useNativeAccordion(props)
  const computedChildren = useMemo(() => {
    if (children) return children

    return items?.map((props, index) => (
      <NativeAccordionItem key={index} {...props} />
    ))
  }, [children, items])
  const context = useMemo(() => ({ name }), [name])
  const componentContext = useMemo(
    () => ({ icon, iconHidden }),
    [icon, iconHidden],
  )

  return (
    <NativeAccordionContext value={context}>
      <ComponentContext value={componentContext}>
        <styled.div {...getRootProps()}>{computedChildren}</styled.div>
      </ComponentContext>
    </NativeAccordionContext>
  )
}, "root")()

export interface NativeAccordionItemProps
  extends HTMLStyledProps<"details">,
    UseNativeAccordionItemProps {
  /**
   * The accordion button to use.
   */
  button?: ReactNode
  /**
   * The accordion icon to use.
   */
  icon?: ReactNode
}

export const NativeAccordionItem = withContext<
  "details",
  NativeAccordionItemProps
>(({ button, children, icon, ...rest }) => {
  const {
    disabled,
    getButtonProps,
    getIconProps,
    getItemProps,
    getPanelProps,
  } = useNativeAccordionItem(rest)
  const [omittedChildren, customAccordionButton, customAccordionPanel] =
    useSplitChildren(children, NativeAccordionButton, NativeAccordionPanel)
  const context = useMemo(
    () => ({
      disabled,
      icon,
      getButtonProps,
      getIconProps,
      getPanelProps,
    }),
    [disabled, getIconProps, getPanelProps, getButtonProps, icon],
  )

  return (
    <ItemComponentContext value={context}>
      <styled.details {...getItemProps()}>
        {customAccordionButton ?? (
          <NativeAccordionButton>{button}</NativeAccordionButton>
        )}
        {customAccordionPanel ?? (
          <NativeAccordionPanel>{omittedChildren}</NativeAccordionPanel>
        )}
      </styled.details>
    </ItemComponentContext>
  )
}, "item")()

export interface NativeAccordionButtonProps extends HTMLStyledProps<"summary"> {
  /**
   * The accordion icon to use.
   */
  icon?: ReactNode
}

export const NativeAccordionButton = withContext<
  "summary",
  NativeAccordionButtonProps
>(({ children, icon: customIcon, ...rest }) => {
  const { icon: rootIcon } = useComponentContext()
  const { icon: itemIcon, getButtonProps } = useItemComponentContext()

  return (
    <styled.summary {...getButtonProps(rest)}>
      {children}

      <NativeAccordionIcon>
        {customIcon ?? itemIcon ?? rootIcon}
      </NativeAccordionIcon>
    </styled.summary>
  )
}, "button")()

export interface NativeAccordionIconProps extends HTMLStyledProps<"svg"> {}

export const NativeAccordionIcon = withContext<"svg", NativeAccordionIconProps>(
  ({ children = <ChevronDownIcon />, ...rest }) => {
    const { iconHidden } = useComponentContext()
    const { getIconProps } = useItemComponentContext()

    if (iconHidden) return null

    if (isValidElement<HTMLProps<"svg">>(children))
      return cloneElement(
        children,
        getIconProps({
          ...rest,
          ...children.props,
        }),
      )

    return Children.count(children) > 1 ? Children.only(null) : null
  },
  "icon",
)()

export interface NativeAccordionPanelProps extends HTMLStyledProps {}

export const NativeAccordionPanel = withContext<
  "div",
  NativeAccordionPanelProps
>(({ children, ...rest }) => {
  const { getPanelProps } = useItemComponentContext()

  return (
    <styled.div {...getPanelProps(rest)}>
      <styled.div>{children}</styled.div>
    </styled.div>
  )
}, "panel")()
