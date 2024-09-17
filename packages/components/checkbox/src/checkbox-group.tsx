import type { ComponentArgs, ThemeProps, PropGetter } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import { useFormControl } from "@yamada-ui/form-control"
import type { FlexProps } from "@yamada-ui/layouts"
import { Flex } from "@yamada-ui/layouts"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import type { Dict } from "@yamada-ui/utils"
import {
  cx,
  isObject,
  useCallbackRef,
  getValidChildren,
} from "@yamada-ui/utils"
import type {
  ChangeEvent,
  ForwardedRef,
  ReactElement,
  RefAttributes,
} from "react"
import { forwardRef, useCallback } from "react"
import type { CheckboxProps } from "./checkbox"
import { Checkbox } from "./checkbox"
import type { CheckboxGroupContext } from "./checkbox-context"
import { CheckboxGroupProvider } from "./checkbox-context"

export interface CheckboxItem<Y extends string | number = string>
  extends CheckboxProps<Y> {
  label?: string
}

const isEvent = (value: any): value is { target: HTMLInputElement } =>
  value && isObject(value) && isObject(value.target)

export interface UseCheckboxGroupProps<Y extends string | number = string> {
  /**
   * The value of the checkbox group.
   */
  value?: Y[]
  /**
   * The initial value of the checkbox group.
   */
  defaultValue?: Y[]
  /**
   * The callback fired when any children checkbox is checked or unchecked.
   */
  onChange?: (value: Y[]) => void
  /**
   * If `true`, input elements will receive `checked` attribute instead of `isChecked`.
   *
   * This assumes, you're using native radio inputs.
   *
   * @default false
   */
  isNative?: boolean
}

export const useCheckboxGroup = <
  Y extends string | number,
  M extends Dict = Dict,
>({
  value: valueProp,
  defaultValue = [],
  onChange: onChangeProp,
  isNative,
  ...props
}: UseCheckboxGroupProps<Y> & M) => {
  const onChangeRef = useCallbackRef(onChangeProp)

  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue,
    onChange: onChangeRef,
  })

  const onChange = useCallback(
    (evOrValue: ChangeEvent<HTMLInputElement> | Y) => {
      const isChecked = isEvent(evOrValue)
        ? evOrValue.target.checked
        : !value.includes(evOrValue)

      const selectedValue = (
        isEvent(evOrValue) ? evOrValue.target.value : evOrValue
      ) as Y

      const nextValue = isChecked
        ? [...value, selectedValue]
        : value.filter((v) => String(v) !== String(selectedValue))

      setValue(nextValue)
    },
    [value, setValue],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      role: "group",
      ...props,
      ref,
    }),
    [],
  )

  const getCheckboxProps: PropGetter<
    { value?: Y },
    { value?: Y; checked?: boolean; isChecked?: boolean }
  > = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref,
      [isNative ? "checked" : "isChecked"]: value.some(
        (val) => String(props?.value) === String(val),
      ),
      onChange,
    }),
    [onChange, isNative, value],
  )

  return {
    props,
    value,
    setValue,
    onChange,
    getContainerProps,
    getCheckboxProps,
  }
}

export type UseCheckboxGroupReturn<Y extends string | number = string> =
  ReturnType<typeof useCheckboxGroup<Y>>

export interface CheckboxGroupProps<Y extends string | number = string>
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
  <Y extends string | number = string>(
    {
      className,
      size,
      variant,
      colorScheme,
      children,
      items = [],
      direction = "column",
      gap,
      ...props
    }: CheckboxGroupProps<Y>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const {
      value,
      onChange,
      props: computedProps,
      getContainerProps,
    } = useCheckboxGroup<Y>(props)
    const { labelId, isRequired, isReadOnly, isDisabled, isInvalid, ...rest } =
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
            size,
            variant,
            colorScheme,
            isRequired,
            isReadOnly,
            isDisabled,
            isInvalid,
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
  <Y extends string | number = string>(
    props: CheckboxGroupProps<Y> & RefAttributes<HTMLDivElement>,
  ): JSX.Element
} & ComponentArgs

CheckboxGroup.displayName = "CheckboxGroup"
