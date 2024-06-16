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
  formControlProperties,
} from "@yamada-ui/form-control"
import { trackFocusVisible } from "@yamada-ui/use-focus-visible"
import type { Dict, PropGetter } from "@yamada-ui/utils"
import {
  cx,
  useCallbackRef,
  funcAll,
  handlerAll,
  dataAttr,
  splitObject,
} from "@yamada-ui/utils"
import type {
  ForwardedRef,
  Ref,
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  KeyboardEvent,
  SyntheticEvent,
  DOMAttributes,
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

export const useRadio = <
  Y extends string | number = string,
  M extends Dict = Dict,
>({
  id,
  ...props
}: UseRadioProps<Y> & M) => {
  id ??= useId()
  const {
    id: _id,
    name,
    value,
    isChecked: isCheckedProp,
    defaultIsChecked,
    required,
    disabled,
    readOnly,
    onChange: onChangeProp,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    ...computedProps
  } = useFormControlProps({ id, ...props })
  const [{ "aria-readonly": _ariaReadonly, ...formControlProps }, rest] =
    splitObject(computedProps, formControlProperties)

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

  const getInputProps: PropGetter = useCallback(
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
      "aria-checked": checked,
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

  const getLabelProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
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
    props: rest,
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
    const { value: groupValue, ...groupProps } = { ...group }
    const control = useFormControl(props)
    const [styles, mergedProps] = useMultiComponentStyle("Radio", {
      ...groupProps,
      ...props,
    })
    const {
      className,
      gap = "0.5rem",
      isRequired = groupProps.isRequired ?? control.isRequired,
      isReadOnly = groupProps.isReadOnly ?? control.isReadOnly,
      isDisabled = groupProps.isDisabled ?? control.isDisabled,
      isInvalid = groupProps.isInvalid ?? control.isInvalid,
      iconProps,
      inputProps,
      labelProps,
      children,
      ...computedProps
    } = omitThemeProps(mergedProps)

    const isChecked =
      groupValue && computedProps.value
        ? groupValue === computedProps.value
        : computedProps.isChecked

    const onChange =
      groupProps.onChange && computedProps.value
        ? funcAll(groupProps.onChange, computedProps.onChange)
        : computedProps.onChange

    const {
      getContainerProps,
      getInputProps,
      getIconProps,
      getLabelProps,
      props: rest,
    } = useRadio({
      ...computedProps,
      isRequired,
      isReadOnly,
      isDisabled,
      isInvalid,
      isChecked,
      onChange,
    })

    return (
      <ui.label
        className={cx("ui-radio", className)}
        {...getContainerProps()}
        {...rest}
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
          {...getLabelProps(labelProps as DOMAttributes<HTMLElement>)}
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
