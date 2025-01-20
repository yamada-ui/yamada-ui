import type {
  ForwardedRef,
  ReactElement,
  ReactNode,
  RefAttributes,
} from "react"
import type { ComponentArgs, ThemeProps } from "../../core"
import type { FlexProps } from "../flex"
import type { FormControlOptions } from "../form-control"
import type { CheckboxProps } from "./checkbox"
import type { CheckboxGroupContext } from "./checkbox-context"
import type { UseCheckboxGroupProps } from "./use-checkbox-group"
import { forwardRef } from "react"
import { cx, getValidChildren } from "../../utils"
import { Flex } from "../flex"
import { useFormControl } from "../form-control"
import { Checkbox } from "./checkbox"
import { CheckboxGroupProvider } from "./checkbox-context"
import { useCheckboxGroup } from "./use-checkbox-group"

export interface CheckboxItem<Y extends number | string = string>
  extends CheckboxProps<Y> {
  label?: ReactNode
}

export interface CheckboxGroupSharedProps<Y extends number | string = string>
  extends Omit<FlexProps, "defaultValue" | "onChange">,
    UseCheckboxGroupProps<Y>,
    FormControlOptions {}

export interface CheckboxGroupProps<Y extends number | string = string>
  extends CheckboxGroupSharedProps<Y>,
    ThemeProps<"Checkbox"> {
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
    const {
      disabled,
      invalid,
      isDisabled: _isDisabled,
      isInvalid: _isInvalid,
      isReadOnly: _isReadOnly,
      isRequired: _isRequired,
      labelId,
      readOnly,
      required,
      ...rest
    } = useFormControl(computedProps)

    const validChildren = getValidChildren(children)
    let computedChildren: ReactElement[] = []

    if (!validChildren.length && items.length) {
      computedChildren = items.map((props, index) => (
        <Checkbox key={index} {...props} />
      ))
    }

    return (
      <CheckboxGroupProvider
        value={
          {
            colorScheme,
            size,
            variant,
            disabled,
            invalid,
            readOnly,
            required,
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
