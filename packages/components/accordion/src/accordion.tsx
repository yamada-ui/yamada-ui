import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { ReactNode } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { cx, isArray } from "@yamada-ui/utils"
import { useEffect, useState } from "react"
import {
  AccordionProvider,
  DescendantsContextProvider,
  useDescendants,
} from "./accordion-context"

export interface AccordionOptions {
  /**
   * The initial index(es) of the accordion item to expand.
   */
  defaultIndex?: number | number[]
  /**
   * The accordion icon for all items to use.
   */
  icon?:
    | ((props: { isDisabled: boolean; isExpanded: boolean }) => ReactNode)
    | ReactNode
  /**
   * If `true`, hide the accordion icon for all items.
   *
   * @default false
   */
  iconHidden?: boolean
  /**
   * The index(es) of the accordion item to expand.
   */
  index?: number | number[]
  /**
   * If `true`, multiple accordion items can be expanded at once.
   *
   * @default false
   */
  isMultiple?: boolean
  /**
   * If `true`, any expanded accordion item can be collapsed again.
   *
   * @default false
   */
  isToggle?: boolean
  /**
   * The callback invoked when accordion items are expanded or collapsed.
   */
  onChange?: (index: number | number[]) => void
}

export interface AccordionProps
  extends Omit<HTMLUIProps, "onChange">,
    ThemeProps<"Accordion">,
    AccordionOptions {}

/**
 * `Accordion` is a component for a list that displays information in an expandable or collapsible manner.
 *
 * @see Docs https://yamada-ui.com/components/disclosure/accordion
 */
export const Accordion = forwardRef<AccordionProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Accordion", props)
  const {
    className,
    defaultIndex: defaultValue,
    icon,
    iconHidden,
    index: value,
    isMultiple,
    isToggle,
    onChange,
    ...rest
  } = omitThemeProps(mergedProps)

  if (
    (value || defaultValue) != null &&
    !isArray(value || defaultValue) &&
    isMultiple
  ) {
    console.warn(
      `Accordion: If 'isMultiple' is passed, then 'index' or 'defaultIndex' must be an array.`,
    )
  }

  if (isMultiple && isToggle) {
    console.warn(
      `Accordion: If 'isMultiple' is passed, 'isToggle' will be ignored. Either remove 'isToggle' or 'isMultiple' depending on whether you want isMultiple accordions visible or not`,
    )
  }

  const descendants = useDescendants()

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const [index, setIndex] = useControllableState({
    defaultValue: () =>
      isMultiple ? (defaultValue ?? []) : (defaultValue ?? -1),
    value,
    onChange,
  })

  useEffect(() => {
    return () => setFocusedIndex(-1)
  }, [])

  const css: CSSUIObject = { w: "100%", ...styles.container }

  return (
    <DescendantsContextProvider value={descendants}>
      <AccordionProvider
        value={{
          focusedIndex,
          icon,
          iconHidden,
          index,
          isMultiple,
          isToggle,
          setFocusedIndex,
          setIndex,
          styles,
        }}
      >
        <ui.div
          ref={ref}
          className={cx("ui-accordion", className)}
          __css={css}
          {...rest}
        />
      </AccordionProvider>
    </DescendantsContextProvider>
  )
})

Accordion.displayName = "Accordion"
Accordion.__ui__ = "Accordion"
