import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { ReactNode } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import {
  cx,
  dataAttr,
  findChild,
  getValidChildren,
  isEmpty,
  omitChildren,
} from "@yamada-ui/utils"
import { AccordionItemProvider, useAccordionContext } from "./accordion-context"
import { AccordionLabel } from "./accordion-label"
import { AccordionPanel } from "./accordion-panel"
import { useAccordionItem } from "./use-accordion-item"

export interface AccordionItemOptions {
  children?:
    | ((props: { isDisabled: boolean; isExpanded: boolean }) => ReactNode)
    | ReactNode
  /**
   * The accordion icon to use.
   */
  icon?:
    | ((props: { isDisabled: boolean; isExpanded: boolean }) => ReactNode)
    | ReactNode
  /**
   * If `true`, the accordion item will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * The accordion label to use.
   */
  label?:
    | ((props: { isDisabled: boolean; isExpanded: boolean }) => ReactNode)
    | ReactNode
}

export interface AccordionItemProps
  extends Omit<HTMLUIProps, "children">,
    AccordionItemOptions {}

export const AccordionItem = forwardRef<AccordionItemProps, "div">(
  ({ className, children, icon, isDisabled = false, label, ...rest }, ref) => {
    const { styles } = useAccordionContext()

    const { isOpen, getLabelProps, getPanelProps } = useAccordionItem({
      isDisabled,
    })

    const css: CSSUIObject = { ...styles.item, overflowAnchor: "none" }

    const cloneLabel =
      typeof label === "function"
        ? label({
            isDisabled,
            isExpanded: isOpen,
          })
        : label

    if (typeof children === "function")
      children = children({ isDisabled, isExpanded: isOpen })

    const validChildren = getValidChildren(children)

    const customAccordionLabel = findChild(validChildren, AccordionLabel)
    const customAccordionPanel = findChild(validChildren, AccordionPanel)

    const cloneChildren = !isEmpty(validChildren)
      ? omitChildren(validChildren, AccordionLabel, AccordionPanel)
      : children

    return (
      <AccordionItemProvider
        value={{ icon, isDisabled, isOpen, getLabelProps, getPanelProps }}
      >
        <ui.div
          ref={ref}
          className={cx("ui-accordion__item", className)}
          data-expanded={dataAttr(isOpen)}
          __css={css}
          {...rest}
        >
          {customAccordionLabel ?? (
            <AccordionLabel>{cloneLabel}</AccordionLabel>
          )}
          {customAccordionPanel ?? (
            <AccordionPanel>{cloneChildren}</AccordionPanel>
          )}
        </ui.div>
      </AccordionItemProvider>
    )
  },
)

AccordionItem.displayName = "AccordionItem"
AccordionItem.__ui__ = "AccordionItem"
