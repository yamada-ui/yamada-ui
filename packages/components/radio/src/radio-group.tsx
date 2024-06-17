import type { ComponentArgs, ThemeProps, UIPropGetter } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import { useFormControl } from "@yamada-ui/form-control"
import type { FlexProps } from "@yamada-ui/layouts"
import { Flex } from "@yamada-ui/layouts"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import type { DOMAttributes, Dict, PropGetter } from "@yamada-ui/utils"
import {
  createContext,
  cx,
  isObject,
  mergeRefs,
  useCallbackRef,
  getValidChildren,
} from "@yamada-ui/utils"
import type { ChangeEvent, ForwardedRef, Ref, ReactElement } from "react"
import { useCallback, useId, useRef, forwardRef } from "react"
import type { RadioProps } from "./radio"
import { Radio } from "./radio"

export type RadioItem<Y extends string | number = string> = RadioProps<Y> & {
  label?: string
}

const isEvent = (value: any): value is { target: HTMLInputElement } =>
  value && isObject(value) && isObject(value.target)

export type UseRadioGroupProps<Y extends string | number = string> = {
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
   * The value of the radio group.
   */
  value?: Y
  /**
   * The initial value of the radio group.
   */
  defaultValue?: Y
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: (value: Y) => void
  /**
   * If `true`, input elements will receive `checked` attribute instead of `isChecked`.
   *
   * This assumes, you're using native radio inputs.
   *
   * @default false
   */
  isNative?: boolean
}

export const useRadioGroup = <
  Y extends string | number = string,
  M extends Dict = Dict,
>({
  id,
  name,
  isNative,
  value: valueProp,
  defaultValue,
  onChange: onChangeProp,
  ...props
}: UseRadioGroupProps<Y> & M) => {
  id ??= useId()
  name ??= `radio-${id}`

  const onChangeRef = useCallbackRef(onChangeProp)

  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue,
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
      ...props,
      ref: mergeRefs(ref, containerRef),
      role: "radiogroup",
    }),
    [],
  )

  const getRadioProps: UIPropGetter<"input", { value?: Y }, { value?: Y }> =
    useCallback(
      (props = {}, ref = null) => ({
        ...props,
        ref,
        name,
        [isNative ? "checked" : "isChecked"]:
          value != null ? props.value === value : undefined,
        onChange,
      }),
      [name, value, onChange, isNative],
    )

  return {
    props,
    id,
    name,
    value,
    setValue,
    onChange,
    onFocus,
    getContainerProps,
    getRadioProps,
  }
}

export type UseRadioGroupReturn<Y extends string | number = string> =
  ReturnType<typeof useRadioGroup<Y>>

export type RadioGroupProps<Y extends string | number = string> =
  ThemeProps<"Radio"> &
    Omit<FlexProps, "onChange"> &
    UseRadioGroupProps<Y> &
    FormControlOptions & {
      /**
       * If provided, generate radios based on items.
       *
       * @default '[]'
       */
      items?: RadioItem<Y>[]
    }

type RadioGroupContext = ThemeProps<"Radio"> &
  FormControlOptions & {
    name: string
    value: string | number
    onChange: (
      evOrValue: ChangeEvent<HTMLInputElement> | string | number,
    ) => void
  }

const [RadioGroupProvider, useRadioGroupContext] = createContext<
  RadioGroupContext | undefined
>({
  strict: false,
  name: "RadioGroupContext",
})

export { useRadioGroupContext }

export const RadioGroup = forwardRef(
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
    }: RadioGroupProps<Y>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const {
      id,
      name,
      value,
      onChange,
      getContainerProps,
      props: computedProps,
    } = useRadioGroup(props)
    const { isRequired, isReadOnly, isDisabled, isInvalid, ...rest } =
      useFormControl({
        id,
        ...computedProps,
      })

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
            size,
            variant,
            colorScheme,
            isRequired,
            isReadOnly,
            isDisabled,
            isInvalid,
            name,
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
            ...rest,
            id,
            name,
          } as DOMAttributes<HTMLElement>)}
          direction={direction}
        >
          {children ?? computedChildren}
        </Flex>
      </RadioGroupProvider>
    )
  },
) as {
  <Y extends string | number = string>(
    props: RadioGroupProps<Y> & { ref?: Ref<HTMLDivElement> },
  ): JSX.Element
} & ComponentArgs

RadioGroup.displayName = "RadioGroup"
