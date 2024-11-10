import type { ComponentArgs, ThemeProps } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { FlexProps } from "@yamada-ui/layouts"
import type { ForwardedRef, ReactElement, RefAttributes } from "react"
import type { CheckboxGroupContext } from "./checkbox-context"
import type { CheckboxItem, UseCheckboxGroupProps } from "./use-checkbox-group"
import { useFormControl } from "@yamada-ui/form-control"
import { Flex } from "@yamada-ui/layouts"
import { cx, getValidChildren } from "@yamada-ui/utils"
import { forwardRef } from "react"
import { Checkbox } from "./checkbox"
import { CheckboxGroupProvider } from "./checkbox-context"
import { useCheckboxGroup } from "./use-checkbox-group"

export interface CheckboxGroupProps<Y extends number | string = string>
  extends ThemeProps<"Checkbox">,
    Omit<FlexProps, "defaultValue" | "onChange">,
    UseCheckboxGroupProps<Y>,
    FormControlOptions {
  /**
   * If provided, generate checkboxes based on items.
   *
   * @default '[]'
   */
  items?: CheckboxItem<Y>[]
}

export const CheckboxGroup = forwardRef(
  <Y extends number | string = string>(
    {
      className,
      colorScheme,
      size,
      variant,
      children,
      direction = "column",
      gap,
      items = [],
      ...props
    }: CheckboxGroupProps<Y>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const {
      props: computedProps,
      value,
      getContainerProps,
      onChange,
    } = useCheckboxGroup<Y>(props)
    const { isDisabled, isInvalid, isReadOnly, isRequired, labelId, ...rest } =
      useFormControl(computedProps)

    const validChildren = getValidChildren(children)
    let computedChildren: ReactElement[] = []

    if (!validChildren.length && items.length) {
      computedChildren = items.map(({ label, value, ...props }, i) => (
        <Checkbox key={i} value={value} {...props}>
          {label}
        </Checkbox>
      ))
    }

    return (
      <CheckboxGroupProvider
        value={
          {
            colorScheme,
            size,
            variant,
            isDisabled,
            isInvalid,
            isReadOnly,
            isRequired,
            value,
            onChange,
          } as CheckboxGroupContext
        }
      >
        <Flex
          ref={ref}
          className={cx("ui-checkbox-group", className)}
          direction={direction}
          gap={gap ?? (direction === "row" ? "1rem" : undefined)}
          {...getContainerProps({
            "aria-labelledby": labelId,
            ...rest,
          })}
        >
          {children ?? computedChildren}
        </Flex>
      </CheckboxGroupProvider>
    )
  },
) as {
  <Y extends number | string = string>(
    props: CheckboxGroupProps<Y> & RefAttributes<HTMLDivElement>,
  ): ReactElement
} & ComponentArgs

CheckboxGroup.displayName = "CheckboxGroup"
CheckboxGroup.__ui__ = "CheckboxGroup"
