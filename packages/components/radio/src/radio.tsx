import type {
  ComponentArgs,
  HTMLUIProps,
  PropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { Dict } from "@yamada-ui/utils"
import type {
  ChangeEvent,
  ChangeEventHandler,
  ForwardedRef,
  InputHTMLAttributes,
  KeyboardEvent,
  RefAttributes,
  SyntheticEvent,
} from "react"
import { omitThemeProps, ui, useComponentMultiStyle } from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControl,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { trackFocusVisible } from "@yamada-ui/use-focus-visible"
import {
  cx,
  dataAttr,
  funcAll,
  handlerAll,
  splitObject,
  useCallbackRef,
} from "@yamada-ui/utils"
import { forwardRef, useCallback, useEffect, useId, useState } from "react"
import { useRadioGroupContext } from "./radio-context"

export interface UseRadioProps<Y extends number | string = string>
  extends FormControlOptions {
  /**
   * id assigned to input.
   */
  id?: string
  /**
   * The name of the input field in a radio.
   */
  name?: string
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
   * The value to be used in the radio button.
   */
  value?: Y
  /**
   * The callback invoked when the checked state changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const useRadio = <
  Y extends number | string = string,
  M extends Dict = Dict,
>({
  id,
  ...props
}: M & UseRadioProps<Y>) => {
  const uuid = useId()

  id ??= uuid

  const {
    id: _id,
    name,
    defaultIsChecked,
    isChecked: isCheckedProp,
    value,
    onChange: onChangeProp,
    ...computedProps
  } = useFormControlProps({ id, ...props })
  const [
    {
      disabled,
      readOnly,
      required,
      "aria-readonly": _ariaReadonly,
      onBlur: onBlurProp,
      onFocus: onFocusProp,
      ...formControlProps
    },
    rest,
  ] = splitObject(computedProps, formControlProperties)

  const [isFocusVisible, setIsFocusVisible] = useState<boolean>(false)
  const [isFocused, setFocused] = useState<boolean>(false)
  const [isHovered, setHovered] = useState<boolean>(false)
  const [isActive, setActive] = useState<boolean>(false)

  const [isChecked, setIsChecked] = useState<boolean>(!!defaultIsChecked)

  const isControlled = isCheckedProp !== undefined
  const checked = isControlled ? (isCheckedProp as boolean) : isChecked

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

      onChangeProp?.(ev)
    },
    [readOnly, disabled, isControlled],
  )
  const onFocus = useCallbackRef(onFocusProp)
  const onBlur = useCallbackRef(onBlurProp)

  const onKeyDown = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === " ") setActive(true)
    },
    [setActive],
  )

  const onKeyUp = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === " ") setActive(false)
    },
    [setActive],
  )

  const getContainerProps: PropGetter<"label"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref,
      "data-checked": dataAttr(checked),
    }),
    [checked, formControlProps],
  )

  const getIconProps: PropGetter<"span"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref,
      "aria-hidden": true,
      "data-active": dataAttr(isActive),
      "data-checked": dataAttr(checked),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocused && isFocusVisible),
      "data-hover": dataAttr(isHovered),
      onMouseDown: handlerAll(props?.onMouseDown, () => setActive(true)),
      onMouseEnter: handlerAll(props?.onMouseEnter, () => setHovered(true)),
      onMouseLeave: handlerAll(props?.onMouseLeave, () => setHovered(false)),
      onMouseUp: handlerAll(props?.onMouseUp, () => setActive(false)),
    }),
    [checked, isActive, isFocused, isFocusVisible, isHovered, formControlProps],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      id,
      ref,
      type: "radio",
      name,
      style: {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0px",
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px",
      },
      checked,
      disabled,
      readOnly,
      required,
      value,
      "aria-checked": checked,
      onBlur: handlerAll(props?.onBlur, onBlur, () => setFocused(false)),
      onChange: handlerAll(props?.onChange, onChange),
      onFocus: handlerAll(props?.onFocus, onFocus, () => setFocused(true)),
      onKeyDown: handlerAll(props?.onKeyDown, onKeyDown),
      onKeyUp: handlerAll(props?.onKeyUp, onKeyUp),
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

  const getLabelProps: PropGetter<"span"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref,
      "data-checked": dataAttr(checked),
      onMouseDown: handlerAll(props?.onMouseDown, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
      onTouchStart: handlerAll(props?.onTouchStart, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
    }),
    [checked, formControlProps],
  )

  return {
    isActive,
    isChecked: checked,
    isFocused,
    isFocusVisible,
    isHovered,
    props: rest,
    getContainerProps,
    getIconProps,
    getInputProps,
    getLabelProps,
  }
}

export type UseRadioReturn = ReturnType<typeof useRadio>

interface RadioOptions {
  iconProps?: HTMLUIProps<"span">
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  labelProps?: HTMLUIProps<"span">
}

export interface RadioProps<Y extends number | string = string>
  extends Omit<HTMLUIProps<"label">, keyof UseRadioProps>,
    ThemeProps<"Radio">,
    UseRadioProps<Y>,
    RadioOptions {}

/**
 * `Radio` is a component used for allowing users to select one option from multiple choices.
 *
 * @see Docs https://yamada-ui.com/components/forms/radio
 */
export const Radio = forwardRef(
  <Y extends number | string = string>(
    props: RadioProps<Y>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const group = useRadioGroupContext()
    const { value: groupValue, ...groupProps } = { ...group }
    const control = useFormControl(props)
    const [styles, mergedProps] = useComponentMultiStyle("Radio", {
      ...groupProps,
      ...props,
    })
    const {
      className,
      children,
      gap = "0.5rem",
      isDisabled = groupProps.isDisabled ?? control.isDisabled,
      isInvalid = groupProps.isInvalid ?? control.isInvalid,
      isReadOnly = groupProps.isReadOnly ?? control.isReadOnly,
      isRequired = groupProps.isRequired ?? control.isRequired,
      iconProps,
      inputProps,
      labelProps,
      ...computedProps
    } = omitThemeProps(mergedProps)

    const isCheckedProp =
      groupValue && computedProps.value
        ? groupValue === computedProps.value
        : computedProps.isChecked

    const onChange =
      groupProps.onChange && computedProps.value
        ? funcAll(groupProps.onChange, computedProps.onChange)
        : computedProps.onChange

    const {
      isChecked,
      props: rest,
      getContainerProps,
      getIconProps,
      getInputProps,
      getLabelProps,
    } = useRadio({
      ...computedProps,
      isChecked: isCheckedProp,
      isDisabled,
      isInvalid,
      isReadOnly,
      isRequired,
      onChange,
    })

    const tabIndex = !groupValue ? 0 : isChecked ? 0 : -1

    return (
      <ui.label
        className={cx("ui-radio", className)}
        {...getContainerProps(rest)}
        __css={{
          alignItems: "center",
          cursor: "pointer",
          display: "inline-flex",
          gap,
          position: "relative",
          verticalAlign: "top",
          ...styles.container,
        }}
      >
        <ui.input
          className="ui-radio__input"
          {...getInputProps(
            {
              ...inputProps,
              tabIndex,
            },
            ref,
          )}
        />

        <ui.span
          className="ui-radio__icon"
          {...getIconProps(iconProps)}
          __css={{
            display: "inline-block",
            position: "relative",
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
  <Y extends number | string = string>(
    props: RadioProps<Y> & RefAttributes<HTMLInputElement>,
  ): JSX.Element
} & ComponentArgs

Radio.displayName = "Radio"
Radio.__ui__ = "Radio"
