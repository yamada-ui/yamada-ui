import type { CSSUIObject, HTMLUIProps, PropGetter } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
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
import type { KeyboardEvent, KeyboardEventHandler, ReactNode } from "react"
import { useCallback, useId } from "react"
import {
  AccordionItemProvider,
  useAccordionContext,
  useAccordionDescendant,
} from "./accordion-context"
import { AccordionLabel } from "./accordion-label"
import { AccordionPanel } from "./accordion-panel"

export interface AccordionItemOptions {
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
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
  /**
   * The accordion icon to use.
   */
  icon?:
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
  children?:
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
}

export interface AccordionItemProps
  extends Omit<HTMLUIProps, "children">,
    AccordionItemOptions {}

export const AccordionItem = forwardRef<AccordionItemProps, "div">(
  (
    { id, className, isDisabled = false, label, icon, children, ...rest },
    ref,
  ) => {
    id ??= useId()
    const itemId = `${id}-item`
    const panelId = `${id}-panel`

    const { index, setIndex, setFocusedIndex, isMultiple, isToggle, styles } =
      useAccordionContext()

    const {
      index: i,
      register,
      descendants,
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
          Home: () => {
            const first = descendants.enabledFirstValue()

            first?.node.focus()
          },
          End: () => {
            const last = descendants.enabledLastValue()

            last?.node.focus()
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
        "aria-expanded": isOpen,
        "aria-controls": panelId,
        "aria-disabled": ariaAttr(
          (!isMultiple && !isToggle && isOpen) || isDisabled,
        ),
        ...props,
        disabled: isDisabled,
        ref: mergeRefs(register, ref),
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
        role: "region",
        "aria-labelledby": itemId,
        ...props,
        ref,
      }),
      [itemId, panelId],
    )

    const css: CSSUIObject = { ...styles.item, overflowAnchor: "none" }

    const cloneLabel =
      typeof label === "function"
        ? label({
            isExpanded: isOpen,
            isDisabled,
          })
        : label

    if (typeof children === "function")
      children = children({ isExpanded: isOpen, isDisabled })

    const validChildren = getValidChildren(children)

    const customAccordionLabel = findChild(validChildren, AccordionLabel)
    const customAccordionPanel = findChild(validChildren, AccordionPanel)

    const cloneChildren = !isEmpty(validChildren)
      ? omitChildren(validChildren, AccordionLabel, AccordionPanel)
      : children

    return (
      <AccordionItemProvider
        value={{ isOpen, isDisabled, icon, getLabelProps, getPanelProps }}
      >
        <ui.div
          ref={ref}
          className={cx("ui-accordion__item", className)}
          id={id}
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
