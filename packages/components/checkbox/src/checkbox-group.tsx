import type { ComponentArgs, PropGetter, ThemeProps } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { FlexProps } from "@yamada-ui/layouts"
import type { Dict } from "@yamada-ui/utils"
import type {
  ChangeEvent,
  ForwardedRef,
  ReactElement,
  RefAttributes,
} from "react"
import type { CheckboxProps } from "./checkbox"
import type { CheckboxGroupContext } from "./checkbox-context"
import { useFormControl } from "@yamada-ui/form-control"
import { Flex } from "@yamada-ui/layouts"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  cx,
  getValidChildren,
  isObject,
  useCallbackRef,
} from "@yamada-ui/utils"
import { forwardRef, useCallback } from "react"
import { Checkbox } from "./checkbox"
import { CheckboxGroupProvider } from "./checkbox-context"

export interface CheckboxItem<Y extends number | string = string>
  extends CheckboxProps<Y> {
  label?: string
}

const isEvent = (value: any): value is { target: HTMLInputElement } =>
  value && isObject(value) && isObject(value.target)

export interface UseCheckboxGroupProps<Y extends number | string = string> {
  /**
   * The initial value of the checkbox group.
   */
  defaultValue?: Y[]
  /**
   * If `true`, input elements will receive `checked` attribute instead of `isChecked`.
   *
   * This assumes, you're using native radio inputs.
   *
   * @default false
   */
  isNative?: boolean
  /**
   * The value of the checkbox group.
   */
  value?: Y[]
  /**
   * The callback fired when any children checkbox is checked or unchecked.
   */
  onChange?: (value: Y[]) => void
}

export const useCheckboxGroup = <
  Y extends number | string,
  M extends Dict = Dict,
>({
  defaultValue = [],
  isNative,
  value: valueProp,
  onChange: onChangeProp,
  ...props
}: M & UseCheckboxGroupProps<Y>) => {
  const onChangeRef = useCallbackRef(onChangeProp)

  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
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
    { checked?: boolean; isChecked?: boolean; value?: Y }
  > = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref,
      [isNative ? "checked" : "isChecked"]: value.some(
        (val) => String(props.value) === String(val),
      ),
      onChange,
    }),
    [onChange, isNative, value],
  )

  return {
    props,
    setValue,
    value,
    getCheckboxProps,
    getContainerProps,
    onChange,
  }
}

export type UseCheckboxGroupReturn<Y extends number | string = string> =
  ReturnType<typeof useCheckboxGroup<Y>>

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
      children,
      colorScheme,
      direction = "column",
      gap,
      items = [],
      size,
      variant,
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
            isDisabled,
            isInvalid,
            isReadOnly,
            isRequired,
            size,
            value,
            variant,
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
