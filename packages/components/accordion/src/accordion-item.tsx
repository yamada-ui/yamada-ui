import type { CSSUIObject, HTMLUIProps, UIPropGetter } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import {
  ariaAttr,
  createContext,
  cx,
  findChildren,
  getValidChildren,
  handlerAll,
  isArray,
  isEmpty,
  mergeRefs,
  omitChildren,
} from "@yamada-ui/utils"
import type { KeyboardEvent, KeyboardEventHandler, ReactNode } from "react"
import { useCallback, useId } from "react"
import { useAccordionContext, useAccordionDescendant } from "./accordion"
import { AccordionLabel } from "./accordion-label"
import { AccordionPanel } from "./accordion-panel"

type AccordionItemContext = Omit<AccordionItemOptions, "children"> & {
  isOpen: boolean
  getLabelProps: UIPropGetter<"button">
  getPanelProps: UIPropGetter
}

const [AccordionItemProvider, useAccordionItemContext] =
  createContext<AccordionItemContext>({
    name: "AccordionItemContext",
    errorMessage: `useAccordionItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<AccordionItem />"`,
  })

export { useAccordionItemContext }

type AccordionItemOptions = {
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

export type AccordionItemProps = Omit<HTMLUIProps<"li">, "children"> &
  AccordionItemOptions

export const AccordionItem = forwardRef<AccordionItemProps, "li">(
  ({ className, isDisabled = false, label, icon, children, ...rest }, ref) => {
    const panelId = useId()

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
        const actions: Record<string, KeyboardEventHandler> = {
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

    const getLabelProps: UIPropGetter<"button"> = useCallback(
      (props = {}, ref = null) => ({
        ...props,
        ref: mergeRefs(register, ref),
        type: "button",
        disabled: isDisabled,
        "aria-controls": panelId,
        onClick: handlerAll(props.onClick, onClick),
        onFocus: handlerAll(props.onFocus, onFocus),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      }),
      [isDisabled, onClick, onFocus, onKeyDown, register, panelId],
    )

    const getPanelProps: UIPropGetter = useCallback(
      (props = {}, ref = null) => ({
        ...props,
        ref,
        id: panelId,
      }),
      [panelId],
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

    const [customAccordionLabel] = findChildren(validChildren, AccordionLabel)
    const [customAccordionPanel] = findChildren(validChildren, AccordionPanel)

    const cloneChildren = !isEmpty(validChildren)
      ? omitChildren(validChildren, AccordionLabel, AccordionPanel)
      : children

    return (
      <AccordionItemProvider
        value={{ isOpen, isDisabled, icon, getLabelProps, getPanelProps }}
      >
        <ui.li
          ref={ref}
          className={cx("ui-accordion__item", className)}
          aria-expanded={ariaAttr(isOpen)}
          __css={css}
          {...rest}
        >
          {customAccordionLabel ?? (
            <AccordionLabel>{cloneLabel}</AccordionLabel>
          )}
          {customAccordionPanel ?? (
            <AccordionPanel>{cloneChildren}</AccordionPanel>
          )}
        </ui.li>
      </AccordionItemProvider>
    )
  },
)
