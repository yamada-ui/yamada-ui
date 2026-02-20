"use client"

import type { HTMLProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { CollapseProps } from "../collapse"
import type { WithTransitionProps } from "../motion"
import type { AccordionStyle } from "./accordion.style"
import type { UseAccordionItemProps, UseAccordionProps } from "./use-accordion"
import { Children, cloneElement, isValidElement, useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { createContext, isString, runIfFn, useSplitChildren } from "../../utils"
import { Collapse } from "../collapse"
import { ChevronDownIcon } from "../icon"
import { accordionStyle } from "./accordion.style"
import {
  AccordionContext,
  AccordionDescendantsContext,
  AccordionItemContext,
  useAccordion,
  useAccordionItem,
  useAccordionItemContext,
} from "./use-accordion"

interface AccordionCallBackProps {
  disabled?: boolean
  expanded?: boolean
}

export interface AccordionItem extends Omit<AccordionItemProps, "index"> {}

interface ComponentContext extends Pick<
  AccordionRootProps,
  "icon" | "iconHidden"
> {}

export interface AccordionRootProps
  extends
    Omit<HTMLStyledProps, "onChange">,
    ThemeProps<AccordionStyle>,
    UseAccordionProps {
  /**
   * The accordion icon for all items to use.
   */
  icon?: ReactNodeOrFunction<AccordionCallBackProps>
  /**
   * If `true`, hide the accordion icon for all items.
   *
   * @default false
   */
  iconHidden?: boolean
  /**
   * If provided, generate elements based on items.
   */
  items?: AccordionItem[]
}

interface ItemComponentContext extends Pick<AccordionItemProps, "icon"> {}

const [ItemComponentContext, useItemComponentContext] =
  createContext<ItemComponentContext>({
    name: "ItemComponentContext",
  })

const {
  ComponentContext,
  PropsContext: AccordionPropsContext,
  useComponentContext,
  usePropsContext: useAccordionPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<AccordionRootProps, AccordionStyle, ComponentContext>(
  "accordion",
  accordionStyle,
)

export { AccordionPropsContext, useAccordionPropsContext }

/**
 * `Accordion` is a component for a list that displays information in an expandable or collapsible manner.
 *
 * @see https://yamada-ui.com/docs/components/accordion
 */
export const AccordionRoot = withProvider<"div", AccordionRootProps>(
  ({ children, icon, iconHidden, items, ...props }) => {
    const {
      descendants,
      focusedIndex,
      index,
      multiple,
      setFocusedIndex,
      setIndex,
      toggle,
      getRootProps,
    } = useAccordion(props)
    const computedChildren = useMemo(() => {
      if (children) return children

      return items?.map((props, index) => (
        <AccordionItem key={index} index={index} {...props} />
      ))
    }, [children, items])
    const context = useMemo(
      () => ({
        focusedIndex,
        icon,
        iconHidden,
        index,
        multiple,
        setFocusedIndex,
        setIndex,
        toggle,
      }),
      [
        focusedIndex,
        icon,
        iconHidden,
        index,
        multiple,
        setFocusedIndex,
        setIndex,
        toggle,
      ],
    )
    const componentContext = useMemo(
      () => ({ icon, iconHidden }),
      [icon, iconHidden],
    )

    return (
      <AccordionDescendantsContext value={descendants}>
        <AccordionContext value={context}>
          <ComponentContext value={componentContext}>
            <styled.div {...getRootProps()}>{computedChildren}</styled.div>
          </ComponentContext>
        </AccordionContext>
      </AccordionDescendantsContext>
    )
  },
  "root",
)()

export interface AccordionItemProps
  extends
    Omit<HTMLStyledProps, "children">,
    Omit<UseAccordionItemProps, "children"> {
  /**
   * The accordion button to use.
   */
  button?: ReactNodeOrFunction<AccordionCallBackProps>
  /**
   * The accordion children to use.
   */
  children?: ReactNodeOrFunction<AccordionCallBackProps>
  /**
   * The accordion icon to use.
   */
  icon?: ReactNodeOrFunction<AccordionCallBackProps>
}

export const AccordionItem = withContext<"div", AccordionItemProps>(
  ({ button, children, icon, ...rest }) => {
    const {
      disabled,
      open,
      getButtonProps,
      getIconProps,
      getItemProps,
      getPanelProps,
    } = useAccordionItem(rest)
    const computedChildren = useMemo(
      () => runIfFn(children, { disabled, expanded: open }),
      [children, disabled, open],
    )
    const [omittedChildren, customAccordionButton, customAccordionPanel] =
      useSplitChildren(computedChildren, AccordionButton, AccordionPanel)
    const context = useMemo(
      () => ({
        disabled,
        icon,
        open,
        getButtonProps,
        getIconProps,
        getPanelProps,
      }),
      [disabled, getButtonProps, getPanelProps, getIconProps, icon, open],
    )
    const componentContext = useMemo(() => ({ icon }), [icon])

    return (
      <AccordionItemContext value={context}>
        <ItemComponentContext value={componentContext}>
          <styled.div {...getItemProps()}>
            {customAccordionButton ?? (
              <AccordionButton>
                {runIfFn(button, { disabled, expanded: open })}
              </AccordionButton>
            )}
            {customAccordionPanel ?? (
              <AccordionPanel>{omittedChildren}</AccordionPanel>
            )}
          </styled.div>
        </ItemComponentContext>
      </AccordionItemContext>
    )
  },
  "item",
)()

export interface AccordionButtonProps extends HTMLStyledProps<"button"> {
  /**
   * The accordion icon to use.
   */
  icon?: ReactNodeOrFunction<AccordionCallBackProps>
  /**
   * Props the container element.
   */
  containerProps?: HTMLStyledProps
}

export const AccordionButton = withContext<"button", AccordionButtonProps>(
  ({ children, icon: customIcon, containerProps, ...rest }) => {
    const { icon: rootIcon } = useComponentContext()
    const { icon: itemIcon } = useItemComponentContext()
    const { disabled, open, getButtonProps } = useAccordionItemContext()
    const props = { disabled, expanded: open }

    return (
      <styled.h3 {...containerProps}>
        <styled.button {...getButtonProps(rest)}>
          {children}

          <AccordionIcon>
            {runIfFn(customIcon, props) ??
              runIfFn(itemIcon, props) ??
              runIfFn(rootIcon, props)}
          </AccordionIcon>
        </styled.button>
      </styled.h3>
    )
  },
  "button",
)()

interface AccordionIconProps extends HTMLStyledProps<"svg"> {}

export const AccordionIcon = withContext<"svg", AccordionIconProps>(
  ({ children = <ChevronDownIcon />, ...rest }) => {
    const { iconHidden } = useComponentContext()
    const { getIconProps } = useAccordionItemContext()

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

export interface AccordionPanelProps
  extends
    Omit<HTMLStyledProps, "transition">,
    Pick<
      CollapseProps,
      | "animationOpacity"
      | "endingHeight"
      | "startingHeight"
      | keyof WithTransitionProps
    > {}

export const AccordionPanel = withContext<"div", AccordionPanelProps>(
  ({
    animationOpacity,
    children,
    delay,
    duration,
    endingHeight,
    startingHeight,
    transition,
    transitionEnd,
    unmountOnExit,
    ...rest
  }) => {
    const { open, getPanelProps } = useAccordionItemContext()

    return (
      <Collapse
        {...{
          animationOpacity,
          delay,
          duration,
          endingHeight,
          open,
          startingHeight,
          transition,
          transitionEnd,
          unmountOnExit,
        }}
      >
        <styled.div {...getPanelProps(rest)}>
          {isString(children) ? <styled.p>{children}</styled.p> : children}
        </styled.div>
      </Collapse>
    )
  },
  "panel",
)()
