import type { CSSUIObject, HTMLUIProps, UIPropGetter } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
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
import { AccordionButton } from "./accordion-button"
import { AccordionPanel } from "./accordion-panel"

type AccordionItemContext = Omit<AccordionItemOptions, "children"> & {
  isOpen: boolean
  getButtonProps: UIPropGetter<"button">
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
   * The accordion button to use.
   */
  button?:
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
  (
    { id, className, isDisabled = false, button, icon, children, ...rest },
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

    const getButtonProps: UIPropGetter<"button"> = useCallback(
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

    const getPanelProps: UIPropGetter = useCallback(
      (props = {}, ref = null) => ({
        id: panelId,
        role: "region",
        "aria-labelledby": itemId,
        ...props,
        ref,
      }),
      [itemId, panelId],
    )

    const css: CSSUIObject = { ...styles.item }

    const cloneButton =
      typeof button === "function"
        ? button({
            isExpanded: isOpen,
            isDisabled,
          })
        : button

    if (typeof children === "function")
      children = children({ isExpanded: isOpen, isDisabled })

    const validChildren = getValidChildren(children)

    const [customAccordionButton] = findChildren(validChildren, AccordionButton)
    const [customAccordionPanel] = findChildren(validChildren, AccordionPanel)

    const cloneChildren = !isEmpty(validChildren)
      ? omitChildren(validChildren, AccordionButton, AccordionPanel)
      : children

    return (
      <AccordionItemProvider
        value={{ isOpen, isDisabled, icon, getButtonProps, getPanelProps }}
      >
        <ui.div
          ref={ref}
          className={cx("ui-accordion__item", className)}
          id={id}
          data-expanded={dataAttr(isOpen)}
          __css={css}
          {...rest}
        >
          {customAccordionButton ?? (
            <AccordionButton>{cloneButton}</AccordionButton>
          )}
          {customAccordionPanel ?? (
            <AccordionPanel>{cloneChildren}</AccordionPanel>
          )}
        </ui.div>
      </AccordionItemProvider>
    )
  },
)
