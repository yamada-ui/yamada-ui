import type {
  ForwardedRef,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  RefAttributes,
} from "react"
import type { ComponentArgs, HTMLUIProps, ThemeProps } from "../../core"
import type { UseRadioProps } from "./use-radio"
import { forwardRef } from "react"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { cx, funcAll } from "../../utils"
import { useFormControl } from "../form-control"
import { useRadioGroupContext } from "./radio-context"
import { useRadio } from "./use-radio"

interface RadioOptions {
  /**
   * The label of the radio.
   */
  label?: ReactNode
  /**
   * Props for icon element.
   */
  iconProps?: HTMLUIProps<"span">
  /**
   * Props for input element.
   */
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  /**
   * Props for label element.
   */
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
 * @see https://yamada-ui.com/components/forms/radio
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
      disabled = groupProps.disabled ?? control.disabled,
      gap = "0.5rem",
      invalid = groupProps.invalid ?? control.invalid,
      label,
      readOnly = groupProps.readOnly ?? control.readOnly,
      required = groupProps.required ?? control.required,
      iconProps,
      inputProps,
      labelProps,
      ...computedProps
    } = omitThemeProps(mergedProps)

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
      disabled,
      invalid,
      readOnly,
      required,
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
          {children ?? label}
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
