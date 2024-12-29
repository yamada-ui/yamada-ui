import type { HTMLProps, HTMLUIProps, ThemeProps } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { Merge } from "../../utils"
import type { UseCollapseProps } from "../collapse"
import type { WithTransitionProps } from "../motion"
import type { AccordionStyle } from "./accordion.style"
import type {
  UseAccordionItemProps,
  UseAccordionProps,
  UseAccordionReturn,
} from "./use-accordion"
import { Children, cloneElement, isValidElement, useMemo } from "react"
import { createSlotComponent, ui } from "../../core"
import {
  findChild,
  getValidChildren,
  isEmpty,
  omitChildren,
  runIfFunc,
} from "../../utils"
import { isString } from "../../utils"
import { Collapse } from "../collapse"
import { ChevronDownIcon } from "../icon"
import { accordionStyle } from "./accordion.style"
import {
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

export interface AccordionRootProps
  extends Omit<HTMLUIProps, "onChange">,
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

interface AccordionContext
  extends Omit<UseAccordionReturn, "descendants" | "getRootProps">,
    Pick<AccordionRootProps, "icon" | "iconHidden"> {}

export const {
  ComponentContext: AccordionContext,
  PropsContext: AccordionPropsContext,
  useComponentContext: useAccordionContext,
  usePropsContext: useAccordionPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<AccordionRootProps, AccordionStyle, AccordionContext>(
  "accordion",
  accordionStyle,
)

/**
 * `Accordion` is a component for a list that displays information in an expandable or collapsible manner.
 *
 * @see Docs https://yamada-ui.com/components/disclosure/accordion
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

    return (
      <AccordionDescendantsContext value={descendants}>
        <AccordionContext value={context}>
          <ui.div {...getRootProps()} />
        </AccordionContext>
      </AccordionDescendantsContext>
    )
  },
  "root",
)()

export interface AccordionItemOptions {
  /**
   * The accordion button to use.
   */
  button?: ReactNodeOrFunction<AccordionCallBackProps>
  children?: ReactNodeOrFunction<AccordionCallBackProps>
  /**
   * The accordion icon to use.
   */
  icon?: ReactNodeOrFunction<AccordionCallBackProps>
}

export interface AccordionItemProps
  extends Omit<HTMLUIProps, "children">,
    Omit<UseAccordionItemProps, "children">,
    AccordionItemOptions {}

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
    children = runIfFunc(children, { disabled, expanded: open })

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

    return (
      <AccordionItemContext value={context}>
        <ui.div {...getItemProps()}>
          {customAccordionButton ?? (
            <AccordionButton>
              {runIfFunc(button, { disabled, expanded: open })}
            </AccordionButton>
          )}
          {customAccordionPanel ?? (
            <AccordionPanel>{cloneChildren}</AccordionPanel>
          )}
        </ui.div>
      </AccordionItemContext>
    )
  },
  "item",
)()

export interface AccordionButtonProps extends HTMLUIProps<"button"> {
  /**
   * The accordion icon to use.
   */
  icon?: ReactNodeOrFunction<{ disabled?: boolean; expanded?: boolean }>
  /**
   * Props the container element.
   */
  containerProps?: HTMLUIProps
}

export const AccordionButton = withContext<"button", AccordionButtonProps>(
  ({ children, icon: customIcon, containerProps, ...rest }) => {
    const { icon: rootIcon } = useAccordionContext()
    const {
      disabled,
      icon: itemIcon,
      open,
      getButtonProps,
    } = useAccordionItemContext()
    const props = { disabled, expanded: open }

    return (
      <ui.h3 {...containerProps}>
        <ui.button {...getButtonProps(rest)}>
          {children}

          <AccordionIcon>
            {runIfFunc(itemIcon, props) ??
              runIfFunc(rootIcon, props) ??
              runIfFunc(customIcon, props)}
          </AccordionIcon>
        </ui.button>
      </ui.h3>
    )
  },
  "button",
)()

interface AccordionIconProps extends HTMLUIProps<"svg"> {}

export const AccordionIcon = withContext<"svg", AccordionIconProps>(
  ({ children = <ChevronDownIcon />, ...rest }) => {
    const { iconHidden } = useAccordionContext()
    const { getIconProps } = useAccordionItemContext()

    if (iconHidden) return null

    if (isValidElement<HTMLProps<"svg">>(children))
      return cloneElement(
        children,
        getIconProps({
          "aria-hidden": true,
          role: "img",
          ...rest,
          ...children.props,
        }),
      )

    return Children.count(children) > 1 ? Children.only(null) : null
  },
  "icon",
)()

interface CollapseProps
  extends Pick<
    UseCollapseProps,
    | "animationOpacity"
    | "endingHeight"
    | "startingHeight"
    | keyof WithTransitionProps
  > {}

export interface AccordionPanelProps
  extends Merge<HTMLUIProps, CollapseProps> {}

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
        <ui.div {...getPanelProps(rest)}>
          {isString(children) ? <ui.p>{children}</ui.p> : children}
        </ui.div>
      </Collapse>
    )
  },
  "panel",
)()
