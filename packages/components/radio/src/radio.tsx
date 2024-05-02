import type {
  HTMLUIProps,
  ThemeProps,
  ComponentArgs,
  UIPropGetter,
} from "@yamada-ui/core"
import { ui, useMultiComponentStyle, omitThemeProps } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  useFormControl,
  useFormControlProps,
  getFormControlProperties,
} from "@yamada-ui/form-control"
import { trackFocusVisible } from "@yamada-ui/use-focus-visible"
import {
  cx,
  useCallbackRef,
  omitObject,
  funcAll,
  handlerAll,
  dataAttr,
  pickObject,
} from "@yamada-ui/utils"
import type {
  ForwardedRef,
  Ref,
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  KeyboardEvent,
  SyntheticEvent,
} from "react"
import { forwardRef, useCallback, useEffect, useId, useState } from "react"
import { useRadioGroupContext } from "./radio-group"

export type UseRadioProps<Y extends string | number = string> =
  FormControlOptions & {
    /**
     * id assigned to input.
     */
    id?: string
    /**
     * The name of the input field in a radio.
     */
    name?: string
    /**
     * The value to be used in the radio button.
     */
    value?: Y
    /**
     * If `true`, the radio will be initially checked.
     *
     * @default false
     */
    defaultIsChecked?: boolean
    /**
     * If `true`, the radio will be checked.
     *
     * @default false
     */
    isChecked?: boolean
    /**
     * The callback invoked when the checked state changes.
     */
    onChange?: ChangeEventHandler<HTMLInputElement>
  }

export const useRadio = <Y extends string | number = string>(
  props: UseRadioProps<Y>,
) => {
  const { name, value, required, disabled, readOnly, ...rest } =
    useFormControlProps(props)
  const id = props.id || useId()
  const formControlProps = pickObject(
    rest,
    getFormControlProperties({ omit: ["aria-readonly"] }),
  )

  const [isFocusVisible, setIsFocusVisible] = useState<boolean>(false)
  const [isFocused, setFocused] = useState<boolean>(false)
  const [isHovered, setHovered] = useState<boolean>(false)
  const [isActive, setActive] = useState<boolean>(false)

  const [isChecked, setIsChecked] = useState<boolean>(!!props.defaultIsChecked)

  const isControlled = props.isChecked !== undefined
  const checked = isControlled ? (props.isChecked as boolean) : isChecked

  useEffect(() => {
    return trackFocusVisible(setIsFocusVisible)
  }, [])

  const onChange = useCallbackRef(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (readOnly || disabled) {
        ev.preventDefault()

        return
      }

      if (!isControlled) setIsChecked(ev.target.checked)

      rest.onChange?.(ev)
    },
    [readOnly, disabled, isControlled],
  )
  const onBlur = useCallbackRef(rest.onBlur)
  const onFocus = useCallbackRef(rest.onFocus)

  const onKeyDown = useCallback(
    ({ key }: KeyboardEvent<Element>) => {
      if (key === " ") setActive(true)
    },
    [setActive],
  )

  const onKeyUp = useCallback(
    ({ key }: KeyboardEvent<Element>) => {
      if (key === " ") setActive(false)
    },
    [setActive],
  )

  const getContainerProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref,
      "data-checked": dataAttr(checked),
    }),
    [checked, formControlProps],
  )

  const getIconProps: UIPropGetter<"span"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref,
      "data-active": dataAttr(isActive),
      "data-hover": dataAttr(isHovered),
      "data-checked": dataAttr(checked),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocused && isFocusVisible),
      "aria-hidden": true,
      onMouseDown: handlerAll(props.onMouseDown, () => setActive(true)),
      onMouseUp: handlerAll(props.onMouseUp, () => setActive(false)),
      onMouseEnter: handlerAll(props.onMouseEnter, () => setHovered(true)),
      onMouseLeave: handlerAll(props.onMouseLeave, () => setHovered(false)),
    }),
    [checked, isActive, isFocused, isFocusVisible, isHovered, formControlProps],
  )

  const getInputProps: UIPropGetter<"input"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref,
      id,
      type: "radio",
      name,
      value,
      required,
      disabled,
      readOnly,
      checked,
      style: {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        width: "1px",
        margin: "-1px",
        padding: "0px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "absolute",
      },
      onChange: handlerAll(props.onChange, onChange),
      onBlur: handlerAll(props.onBlur, onBlur, () => setFocused(false)),
      onFocus: handlerAll(props.onFocus, onFocus, () => setFocused(true)),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      onKeyUp: handlerAll(props.onKeyUp, onKeyUp),
    }),
    [
      formControlProps,
      id,
      name,
      value,
      required,
      disabled,
      readOnly,
      checked,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
    ],
  )

  const getLabelProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      props,
      ref,
      onMouseDown: handlerAll(props.onMouseDown, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
      onTouchStart: handlerAll(props.onTouchStart, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
      "data-checked": dataAttr(checked),
    }),
    [checked, formControlProps],
  )

  return {
    isFocusVisible,
    isFocused,
    isHovered,
    isActive,
    isChecked: checked,
    getContainerProps,
    getInputProps,
    getIconProps,
    getLabelProps,
  }
}

export type UseRadioReturn = ReturnType<typeof useRadio>

type RadioOptions = {
  iconProps?: HTMLUIProps<"span">
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  labelProps?: HTMLUIProps<"span">
}

export type RadioProps<Y extends string | number = string> = Omit<
  HTMLUIProps<"label">,
  keyof UseRadioProps
> &
  ThemeProps<"Radio"> &
  UseRadioProps<Y> &
  RadioOptions

/**
 * `Radio` is a component used for allowing users to select one option from multiple choices.
 *
 * @see Docs https://yamada-ui.com/components/forms/radio
 */
export const Radio = forwardRef(
  <Y extends string | number = string>(
    props: RadioProps<Y>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const group = useRadioGroupContext()
    const control = useFormControl(props)
    const [styles, mergedProps] = useMultiComponentStyle("Radio", {
      ...group,
      ...props,
    })
    const {
      className,
      gap = "0.5rem",
      isRequired = group?.isRequired ?? control.isRequired,
      isReadOnly = group?.isReadOnly ?? control.isReadOnly,
      isDisabled = group?.isDisabled ?? control.isDisabled,
      isInvalid = group?.isInvalid ?? control.isInvalid,
      iconProps,
      inputProps,
      labelProps,
      children,
      ...rest
    } = omitThemeProps(mergedProps)

    const { getContainerProps, getInputProps, getIconProps, getLabelProps } =
      useRadio({
        ...rest,
        isRequired,
        isReadOnly,
        isDisabled,
        isInvalid,
        isChecked:
          group?.value && rest.value
            ? group.value === rest.value
            : rest.isChecked,
        onChange:
          group?.onChange && rest.value
            ? funcAll(group.onChange, rest.onChange)
            : rest.onChange,
      })

    return (
      <ui.label
        className={cx("ui-radio", className)}
        {...getContainerProps()}
        {...omitObject(rest, [
          "id",
          "name",
          "value",
          "defaultValue",
          "defaultIsChecked",
          "isChecked",
          "onChange",
          "onBlur",
          "onFocus",
        ])}
        __css={{
          cursor: "pointer",
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          verticalAlign: "top",
          gap,
          ...styles.container,
        }}
      >
        <ui.input
          className="ui-radio__input"
          {...getInputProps(inputProps, ref)}
        />

        <ui.span
          className="ui-radio__icon"
          {...getIconProps(iconProps)}
          __css={{
            position: "relative",
            display: "inline-block",
            userSelect: "none",
            ...styles.icon,
          }}
        />

        <ui.span
          className="ui-radio__label"
          {...getLabelProps(labelProps)}
          __css={{ ...styles.label }}
        >
          {children}
        </ui.span>
      </ui.label>
    )
  },
) as {
  <Y extends string | number = string>(
    props: RadioProps<Y> & { ref?: Ref<HTMLInputElement> },
  ): JSX.Element
} & ComponentArgs

Radio.displayName = "Radio"
