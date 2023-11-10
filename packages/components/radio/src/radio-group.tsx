import { ComponentArgs, ThemeProps } from "@yamada-ui/core"
import { useFormControl, FormControlOptions } from "@yamada-ui/form-control"
import { Flex, FlexProps } from "@yamada-ui/layouts"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  createContext,
  cx,
  isObject,
  mergeRefs,
  PropGetter,
  DOMAttributes,
  useCallbackRef,
  omitObject,
} from "@yamada-ui/utils"
import {
  ChangeEvent,
  useCallback,
  useId,
  useRef,
  forwardRef,
  ForwardedRef,
  Ref,
} from "react"

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

export const useRadioGroup = <Y extends string | number = string>({
  id,
  name,
  isNative,
  ...props
}: UseRadioGroupProps<Y>) => {
  id = id ?? useId()
  name = name ?? `radio-${id}`

  props.onChange = useCallbackRef(props.onChange)

  const [value, setValue] = useControllableState({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: props.onChange,
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
      role: "group",
    }),
    [],
  )

  const getRadioProps: PropGetter<
    DOMAttributes<HTMLInputElement> & { isChecked?: boolean },
    Omit<DOMAttributes<HTMLInputElement>, "onChange"> & {
      onChange: (ev: ChangeEvent<HTMLInputElement> | Y) => void
    }
  > = useCallback(
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
    name,
    value,
    setValue,
    onChange,
    onFocus,
    getContainerProps,
    getRadioProps,
  }
}

export type UseRadioGroupReturn = ReturnType<typeof useRadioGroup>

export type RadioGroupProps<Y extends string | number = string> =
  ThemeProps<"Radio"> &
    Omit<FlexProps, "onChange"> &
    UseRadioGroupProps<Y> &
    FormControlOptions

type RadioGroupContext = ThemeProps<"Radio"> &
  FormControlOptions & {
    name: string
    value: string | number
    onChange: (
      evOrValue: ChangeEvent<HTMLInputElement> | string | number,
    ) => void
  }

const [RadioGroupProvider, useRadioGroupContenxt] = createContext<
  RadioGroupContext | undefined
>({
  strict: false,
  name: "RadioGroupContext",
})

export { useRadioGroupContenxt }

export const RadioGroup = forwardRef(
  <Y extends string | number = string>(
    {
      className,
      size,
      variant,
      colorScheme,
      children,
      direction = "column",
      gap,
      ...props
    }: RadioGroupProps<Y>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { name, value, onChange, getContainerProps } = useRadioGroup(props)
    const { isRequired, isReadOnly, isDisabled, isInvalid } =
      useFormControl(props)

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
          className={cx("ui-radio__group", className)}
          direction={direction}
          gap={gap ?? (direction === "row" ? "1rem" : undefined)}
          {...getContainerProps(
            omitObject(props, [
              "onChange",
              "isInvalid",
              "isDisabled",
              "isRequired",
              "isReadOnly",
            ]),
          )}
        >
          {children}
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
