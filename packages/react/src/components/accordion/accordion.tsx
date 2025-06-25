"use client"

import type { HTMLProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { CollapseProps } from "../collapse"
import type { WithTransitionProps } from "../motion"
import type { AccordionStyle } from "./accordion.style"
import type { UseAccordionItemProps, UseAccordionProps } from "./use-accordion"
import { Children, cloneElement, isValidElement, useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import {
  createContext,
  findChild,
  getValidChildren,
  isEmpty,
  omitChildren,
  runIfFn,
} from "../../utils"
import { isString } from "../../utils"
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

interface AccordionComponentContext
  extends Pick<AccordionRootProps, "icon" | "iconHidden"> {}

export interface AccordionRootProps
  extends Omit<HTMLStyledProps, "onChange">,
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
}

interface AccordionItemComponentContext
  extends Pick<AccordionItemProps, "icon"> {}

const [AccordionItemComponentContext, useAccordionItemComponentContext] =
  createContext<AccordionItemComponentContext>({
    name: "AccordionItemComponentContext",
  })

export const {
  ComponentContext: AccordionComponentContext,
  PropsContext: AccordionPropsContext,
  useComponentContext: useAccordionComponentContext,
  usePropsContext: useAccordionPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  AccordionRootProps,
  AccordionStyle,
  AccordionComponentContext
>("accordion", accordionStyle)

/**
 * `Accordion` is a component for a list that displays information in an expandable or collapsible manner.
 *
 * @see https://yamada-ui.com/components/accordion
 */
export const AccordionRoot = withProvider<"div", AccordionRootProps>(
  ({ icon, iconHidden, ...props }) => {
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
          <AccordionComponentContext value={componentContext}>
            <styled.div {...getRootProps()} />
          </AccordionComponentContext>
        </AccordionContext>
      </AccordionDescendantsContext>
    )
  },
  "root",
)()

export interface AccordionItemProps
  extends Omit<HTMLStyledProps, "children">,
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

    children = runIfFn(children, { disabled, expanded: open })

    const validChildren = getValidChildren(children)
    const customAccordionButton = findChild(validChildren, AccordionButton)
    const customAccordionPanel = findChild(validChildren, AccordionPanel)
    const cloneChildren = !isEmpty(validChildren)
      ? omitChildren(validChildren, AccordionButton, AccordionPanel)
      : children

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
        <AccordionItemComponentContext value={componentContext}>
          <styled.div {...getItemProps()}>
            {customAccordionButton ?? (
              <AccordionButton>
                {runIfFn(button, { disabled, expanded: open })}
              </AccordionButton>
            )}
            {customAccordionPanel ?? (
              <AccordionPanel>{cloneChildren}</AccordionPanel>
            )}
          </styled.div>
        </AccordionItemComponentContext>
      </AccordionItemContext>
    )
  },
  "item",
)()

export interface AccordionButtonProps extends HTMLStyledProps<"button"> {
  /**
   * The accordion icon to use.
   */
  icon?: ReactNodeOrFunction<{ disabled?: boolean; expanded?: boolean }>
  /**
   * Props the container element.
   */
  containerProps?: HTMLStyledProps
}

export const AccordionButton = withContext<"button", AccordionButtonProps>(
  ({ children, icon: customIcon, containerProps, ...rest }) => {
    const { icon: rootIcon } = useAccordionComponentContext()
    const { icon: itemIcon } = useAccordionItemComponentContext()
    const { disabled, open, getButtonProps } = useAccordionItemContext()
    const props = { disabled, expanded: open }

    return (
      <styled.h3 {...containerProps}>
        <styled.button {...getButtonProps(rest)}>
          {children}

          <AccordionIcon>
            {runIfFn(itemIcon, props) ??
              runIfFn(rootIcon, props) ??
              runIfFn(customIcon, props)}
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
    const { iconHidden } = useAccordionComponentContext()
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
  extends Omit<HTMLStyledProps, "transition">,
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
