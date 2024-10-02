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
import type { RadioProps } from "./radio"
import type { RadioGroupContext } from "./radio-context"
import { useFormControl } from "@yamada-ui/form-control"
import { Flex } from "@yamada-ui/layouts"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  cx,
  getValidChildren,
  isObject,
  mergeRefs,
  useCallbackRef,
} from "@yamada-ui/utils"
import { forwardRef, useCallback, useId, useRef } from "react"
import { Radio } from "./radio"
import { RadioGroupProvider } from "./radio-context"

export type RadioItem<Y extends number | string = string> = {
  label?: string
} & RadioProps<Y>

const isEvent = (value: any): value is { target: HTMLInputElement } =>
  value && isObject(value) && isObject(value.target)

export interface UseRadioGroupProps<Y extends number | string = string> {
  /**
   * The top-level id string that will be applied to the radios.
   * The index of the radio will be appended to this top-level id.
   */
  id?: string
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * The initial value of the radio group.
   */
  defaultValue?: Y
  /**
   * If `true`, input elements will receive `checked` attribute instead of `isChecked`.
   *
   * This assumes, you're using native radio inputs.
   *
   * @default false
   */
  isNative?: boolean
  /**
   * The value of the radio group.
   */
  value?: Y
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: (value: Y) => void
}

export const useRadioGroup = <
  Y extends number | string,
  M extends Dict = Dict,
>({
  id,
  name,
  defaultValue,
  isNative,
  value: valueProp,
  onChange: onChangeProp,
  ...props
}: M & UseRadioGroupProps<Y>) => {
  const uuid = useId()

  id ??= uuid
  name ??= `radio-${id}`

  const onChangeRef = useCallbackRef(onChangeProp)

  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeRef,
  })

  const containerRef = useRef<any>(null)

  const onFocus = useCallback(() => {
    const container = containerRef.current

    if (!container) return

    let query = `input:not(:disabled):checked`

    let firstInput = container.querySelector(query) as HTMLElement | undefined

    if (firstInput) {
      firstInput.focus()
    } else {
      query = `input:not(:disabled)`
      firstInput = container.querySelector(query) as HTMLElement | undefined

      firstInput?.focus()
    }
  }, [])

  const onChange = useCallback(
    (evOrValue: ChangeEvent<HTMLInputElement> | Y) => {
      const nextValue = (
        isEvent(evOrValue) ? evOrValue.target.value : evOrValue
      ) as Y

      setValue(nextValue)
    },
    [setValue],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      role: "radiogroup",
      ...props,
      ref: mergeRefs(ref, containerRef),
    }),
    [],
  )

  const getRadioProps: PropGetter<
    { value?: Y },
    { checked?: boolean; isChecked?: boolean; value?: Y }
  > = useCallback(
    (props = {}, ref = null) => {
      const isChecked = props.value === value

      return {
        ...props,
        ref,
        name,
        [isNative ? "checked" : "isChecked"]:
          value != null ? isChecked : undefined,
        "aria-checked": isChecked,
        onChange,
      }
    },
    [name, value, onChange, isNative],
  )

  return {
    id,
    name,
    props,
    setValue,
    value,
    getContainerProps,
    getRadioProps,
    onChange,
    onFocus,
  }
}

export type UseRadioGroupReturn<Y extends number | string = string> =
  ReturnType<typeof useRadioGroup<Y>>

export interface RadioGroupProps<Y extends number | string = string>
  extends ThemeProps<"Radio">,
    Omit<FlexProps, "defaultValue" | "onChange">,
    UseRadioGroupProps<Y>,
    FormControlOptions {
  /**
   * If provided, generate radios based on items.
   *
   * @default '[]'
   */
  items?: RadioItem<Y>[]
}

export const RadioGroup = forwardRef(
  <Y extends number | string = string>(
    {
      id: idProp,
      className,
      children,
      colorScheme,
      direction = "column",
      gap,
      items = [],
      size,
      variant,
      ...props
    }: RadioGroupProps<Y>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const {
      isDisabled,
      isInvalid,
      isReadOnly,
      isRequired,
      labelId,
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

    if (!validChildren.length && items.length) {
      computedChildren = items.map(({ label, value, ...props }, i) => (
        <Radio key={i} value={value} {...props}>
          {label}
        </Radio>
      ))
    }

    return (
      <RadioGroupProvider
        value={
          {
            name,
            colorScheme,
            isDisabled,
            isInvalid,
            isReadOnly,
            isRequired,
            size,
            value,
            variant,
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
  ): JSX.Element
} & ComponentArgs

RadioGroup.displayName = "RadioGroup"
RadioGroup.__ui__ = "RadioGroup"
