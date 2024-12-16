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
    | ((props: {
        /**
         * @deprecated Use `disabled` instead.
         */
        isDisabled: boolean
        /**
         * @deprecated Use `expanded` instead.
         */
        isExpanded: boolean
        disabled?: boolean
        expanded?: boolean
      }) => ReactNode)
    | ReactNode
  /**
   * If `true`, the accordion item will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The accordion icon to use.
   */
  icon?:
    | ((props: {
        /**
         * @deprecated Use `disabled` instead.
         */
        isDisabled: boolean
        /**
         * @deprecated Use `expanded` instead.
         */
        isExpanded: boolean
        disabled?: boolean
        expanded?: boolean
      }) => ReactNode)
    | ReactNode
  /**
   * If `true`, the accordion item will be disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  /**
   * The accordion label to use.
   */
  label?:
    | ((props: {
        /**
         * @deprecated Use `disabled` instead.
         */
        isDisabled: boolean
        /**
         * @deprecated Use `expanded` instead.
         */
        isExpanded: boolean
        disabled?: boolean
        expanded?: boolean
      }) => ReactNode)
    | ReactNode
}

export interface AccordionItemProps
  extends Omit<HTMLUIProps, "children">,
    AccordionItemOptions {}

export const AccordionItem = forwardRef<AccordionItemProps, "div">(
  (
    {
      className,
      children,
      isDisabled = false,
      disabled = isDisabled,
      icon,
      label,
      ...rest
    },
    ref,
  ) => {
    const itemId = useId()
    const panelId = useId()

    const { index, multiple, setFocusedIndex, setIndex, styles, toggle } =
      useAccordionContext()

    const {
      descendants,
      index: i,
      register,
    } = useAccordionDescendant({ disabled })

    const open =
      i !== -1 ? (isArray(index) ? index.includes(i) : index === i) : false

    if (open && disabled)
      console.warn(`Accordion: Cannot open a disabled accordion item`)

    const onChange = useCallback(
      (open: boolean) => {
        if (i === -1) return

        if (multiple && isArray(index)) {
          setIndex(open ? index.concat(i) : index.filter((v) => v !== i))
        } else if (open) {
          setIndex(i)
        } else if (toggle) {
          setIndex(-1)
        }
      },
      [multiple, toggle, i, index, setIndex],
    )

    const onFocus = useCallback(() => {
      setFocusedIndex(i)
    }, [setFocusedIndex, i])

    const onClick = useCallback(() => {
      onChange(!open)
      setFocusedIndex(i)
    }, [i, setFocusedIndex, open, onChange])

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
        "aria-disabled": ariaAttr((!multiple && !toggle && open) || disabled),
        "aria-expanded": open,
        ...props,
        ref: mergeRefs(register, ref),
        disabled,
        onClick: handlerAll(props.onClick, onClick),
        onFocus: handlerAll(props.onFocus, onFocus),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      }),
      [
        itemId,
        open,
        panelId,
        multiple,
        toggle,
        disabled,
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
            disabled,
            expanded: open,
            isDisabled: disabled,
            isExpanded: open,
          })
        : label

    if (typeof children === "function")
      children = children({
        disabled,
        expanded: open,
        isDisabled: disabled,
        isExpanded: open,
      })

    const validChildren = getValidChildren(children)

    const customAccordionLabel = findChild(validChildren, AccordionLabel)
    const customAccordionPanel = findChild(validChildren, AccordionPanel)

    const cloneChildren = !isEmpty(validChildren)
      ? omitChildren(validChildren, AccordionLabel, AccordionPanel)
      : children

    return (
      <AccordionItemProvider
        value={{ disabled, icon, open, getLabelProps, getPanelProps }}
      >
        <ui.div
          ref={ref}
          className={cx("ui-accordion__item", className)}
          data-expanded={dataAttr(open)}
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
