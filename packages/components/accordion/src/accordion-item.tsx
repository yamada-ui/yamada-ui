import type { CSSUIObject, HTMLUIProps, PropGetter } from "@yamada-ui/core"
import type { KeyboardEvent, KeyboardEventHandler, ReactNode } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import {
  ariaAttr,
  cx,
  dataAttr,
  findChild,
  getValidChildren,
  handlerAll,
  isArray,
  isEmpty,
  mergeRefs,
  omitChildren,
} from "@yamada-ui/utils"
import { useCallback, useId } from "react"
import {
  AccordionItemProvider,
  useAccordionContext,
  useAccordionDescendant,
} from "./accordion-context"
import { AccordionLabel } from "./accordion-label"
import { AccordionPanel } from "./accordion-panel"

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
    const itemId = useId()
    const panelId = useId()

    const { index, isMultiple, isToggle, setFocusedIndex, setIndex, styles } =
      useAccordionContext()

    const {
      descendants,
      index: i,
      register,
    } = useAccordionDescendant({ disabled: isDisabled })

    const isOpen =
      i !== -1 ? (isArray(index) ? index.includes(i) : index === i) : false

    if (isOpen && isDisabled)
      console.warn(`Accordion: Cannot open a disabled accordion item`)

    const onChange = useCallback(
      (isOpen: boolean) => {
        if (i === -1) return

        if (isMultiple && isArray(index)) {
          setIndex(isOpen ? index.concat(i) : index.filter((v) => v !== i))
        } else if (isOpen) {
          setIndex(i)
        } else if (isToggle) {
          setIndex(-1)
        }
      },
      [isMultiple, isToggle, i, index, setIndex],
    )

    const onFocus = useCallback(() => {
      setFocusedIndex(i)
    }, [setFocusedIndex, i])

    const onClick = useCallback(() => {
      onChange(!isOpen)
      setFocusedIndex(i)
    }, [i, setFocusedIndex, isOpen, onChange])

    const onKeyDown = useCallback(
      (ev: KeyboardEvent) => {
        const actions: { [key: string]: KeyboardEventHandler } = {
          ArrowDown: () => {
            const next = descendants.enabledNextValue(i)

            next?.node.focus()
          },
          ArrowUp: () => {
            const prev = descendants.enabledPrevValue(i)

            prev?.node.focus()
          },
          End: () => {
            const last = descendants.enabledLastValue()

            last?.node.focus()
          },
          Home: () => {
            const first = descendants.enabledFirstValue()

            first?.node.focus()
          },
        }

        const action = actions[ev.key]

        if (!action) return

        ev.preventDefault()
        action(ev)
      },
      [descendants, i],
    )

    const getLabelProps: PropGetter<"button"> = useCallback(
      (props = {}, ref = null) => ({
        id: itemId,
        type: "button",
        "aria-controls": panelId,
        "aria-disabled": ariaAttr(
          (!isMultiple && !isToggle && isOpen) || isDisabled,
        ),
        "aria-expanded": isOpen,
        ...props,
        ref: mergeRefs(register, ref),
        disabled: isDisabled,
        onClick: handlerAll(props.onClick, onClick),
        onFocus: handlerAll(props.onFocus, onFocus),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      }),
      [
        itemId,
        isOpen,
        panelId,
        isMultiple,
        isToggle,
        isDisabled,
        register,
        onClick,
        onFocus,
        onKeyDown,
      ],
    )

    const getPanelProps: PropGetter = useCallback(
      (props = {}, ref = null) => ({
        id: panelId,
        "aria-labelledby": itemId,
        role: "region",
        ...props,
        ref,
      }),
      [itemId, panelId],
    )

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
