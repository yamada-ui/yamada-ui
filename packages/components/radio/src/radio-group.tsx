import type { ComponentArgs, ThemeProps } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { FlexProps } from "@yamada-ui/layouts"
import type { ForwardedRef, ReactElement, RefAttributes } from "react"
import type { RadioProps } from "./radio"
import type { RadioGroupContext } from "./radio-context"
import type { UseRadioGroupProps } from "./use-radio-group"
import { useFormControl } from "@yamada-ui/form-control"
import { Flex } from "@yamada-ui/layouts"
import { cx, getValidChildren } from "@yamada-ui/utils"
import { forwardRef } from "react"
import { Radio } from "./radio"
import { RadioGroupProvider } from "./radio-context"
import { useRadioGroup } from "./use-radio-group"

export type RadioItem<Y extends number | string = string> = RadioProps<Y>

export interface RadioGroupSharedProps<Y extends number | string = string>
  extends Omit<FlexProps, "defaultValue" | "onChange">,
    UseRadioGroupProps<Y>,
    FormControlOptions {}

export interface RadioGroupProps<Y extends number | string = string>
  extends RadioGroupSharedProps<Y>,
    ThemeProps<"Radio"> {
  /**
   * If provided, generate radios based on items.
   *
   * @default '[]'
   */
  items?: RadioItem<Y>[]
}

/**
 * `RadioGroup` is a component that groups `Radio` components.
 *
 * @see Docs https://yamada-ui.com/components/forms/radio
 */
export const RadioGroup = forwardRef(
  <Y extends number | string = string>(
    {
      id: idProp,
      className,
      colorScheme,
      size,
      variant,
      children,
      direction = "column",
      gap,
      items = [],
      ...props
    }: RadioGroupProps<Y>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
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
      ...computedProps
    } = useFormControl({
      id: idProp,
      ...props,
    })
    const {
      id,
      name,
      props: rest,
      value,
      getContainerProps,
      onChange,
    } = useRadioGroup(computedProps)

    const validChildren = getValidChildren(children)
    let computedChildren: ReactElement[] = []

    if (!validChildren.length && items.length)
      computedChildren = items.map((props, index) => (
        <Radio key={index} {...props} />
      ))

    return (
      <RadioGroupProvider
        value={
          {
            name,
            colorScheme,
            size,
            variant,
            disabled,
            invalid,
            readOnly,
            required,
            value,
            onChange,
          } as RadioGroupContext
        }
      >
        <Flex
          ref={ref}
          className={cx("ui-radio-group", className)}
          gap={gap ?? (direction === "row" ? "1rem" : undefined)}
          {...getContainerProps({
            id,
            "aria-labelledby": labelId,
            ...rest,
          })}
          direction={direction}
        >
          {children ?? computedChildren}
        </Flex>
      </RadioGroupProvider>
    )
  },
) as {
  <Y extends number | string = string>(
    props: RadioGroupProps<Y> & RefAttributes<HTMLDivElement>,
  ): ReactElement
} & ComponentArgs

RadioGroup.displayName = "RadioGroup"
RadioGroup.__ui__ = "RadioGroup"
