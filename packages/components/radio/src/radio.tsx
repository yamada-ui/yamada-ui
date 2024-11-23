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
  ReactElement,
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
   * If `true`, the radio will be checked.
   *
   * @default false
   */
  checked?: boolean
  /**
   * If `true`, the radio will be initially checked.
   *
   * @default false
   */
  defaultChecked?: boolean
  /**
   * If `true`, the radio will be initially checked.
   *
   * @default false
   *
   * @deprecated Use `defaultChecked` instead.
   */
  defaultIsChecked?: boolean
  /**
   * If `true`, the radio will be checked.
   *
   * @default false
   *
   * @deprecated Use `checked` instead.
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

  let {
    id: _id,
    name,
    checked: checkedProp,
    defaultChecked,
    defaultIsChecked,
    isChecked: isCheckedProp,
    value,
    onChange: onChangeProp,
    ...computedProps
  } = useFormControlProps({ id, ...props })

  checkedProp ??= isCheckedProp
  defaultChecked ??= defaultIsChecked

  const [
    {
      "aria-readonly": _ariaReadonly,
      disabled,
      readOnly,
      required,
      onBlur: onBlurProp,
      onFocus: onFocusProp,
      ...formControlProps
    },
    rest,
  ] = splitObject(computedProps, formControlProperties)

  const [focusVisible, setFocusVisible] = useState<boolean>(false)
  const [focused, setFocused] = useState<boolean>(false)
  const [hovered, setHovered] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)

  const [checked, setChecked] = useState<boolean>(!!defaultChecked)

  const controlled = checkedProp !== undefined
  const resolvedChecked = controlled ? (checkedProp as boolean) : checked

  useEffect(() => {
    return trackFocusVisible(setFocusVisible)
  }, [])

  const onChange = useCallbackRef(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (readOnly || disabled) {
        ev.preventDefault()

        return
      }

      if (!controlled) setChecked(ev.target.checked)

      onChangeProp?.(ev)
    },
    [readOnly, disabled, controlled],
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
      "data-checked": dataAttr(resolvedChecked),
    }),
    [resolvedChecked, formControlProps],
  )

  const getIconProps: PropGetter<"span"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref,
      "aria-hidden": true,
      "data-active": dataAttr(active),
      "data-checked": dataAttr(resolvedChecked),
      "data-focus": dataAttr(focused),
      "data-focus-visible": dataAttr(focused && focusVisible),
      "data-hover": dataAttr(hovered),
      onMouseDown: handlerAll(props.onMouseDown, () => setActive(true)),
      onMouseEnter: handlerAll(props.onMouseEnter, () => setHovered(true)),
      onMouseLeave: handlerAll(props.onMouseLeave, () => setHovered(false)),
      onMouseUp: handlerAll(props.onMouseUp, () => setActive(false)),
    }),
    [resolvedChecked, active, focused, focusVisible, hovered, formControlProps],
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
      "aria-checked": resolvedChecked,
      checked: resolvedChecked,
      disabled,
      readOnly,
      required,
      value,
      onBlur: handlerAll(props.onBlur, onBlur, () => setFocused(false)),
      onChange: handlerAll(props.onChange, onChange),
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
      resolvedChecked,
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
      "data-checked": dataAttr(resolvedChecked),
      onMouseDown: handlerAll(props.onMouseDown, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
      onTouchStart: handlerAll(props.onTouchStart, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
    }),
    [resolvedChecked, formControlProps],
  )

  return {
    active,
    checked: resolvedChecked,
    focused,
    focusVisible,
    hovered,
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

    computedProps.checked ??= computedProps.isChecked

    const checkedProp =
      groupValue && computedProps.value
        ? groupValue === computedProps.value
        : computedProps.checked

    const onChange =
      groupProps.onChange && computedProps.value
        ? funcAll(groupProps.onChange, computedProps.onChange)
        : computedProps.onChange

    const {
      checked,
      props: rest,
      getContainerProps,
      getIconProps,
      getInputProps,
      getLabelProps,
    } = useRadio({
      ...computedProps,
      checked: checkedProp,
      isChecked: checkedProp,
      isDisabled,
      isInvalid,
      isReadOnly,
      isRequired,
      onChange,
    })

    const tabIndex = !groupValue ? 0 : checked ? 0 : -1

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

        <ui.div
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
  ): ReactElement
} & ComponentArgs

Radio.displayName = "Radio"
Radio.__ui__ = "Radio"
