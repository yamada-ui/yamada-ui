import type {
  ForwardedRef,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  RefAttributes,
} from "react"
import type { ComponentArgs, HTMLUIProps, ThemeProps } from "../../core"
import type { RadioCardAddonProps } from "./radio-card-addon"
import type { RadioCardDescriptionProps } from "./radio-card-description"
import type { RadioCardLabelProps } from "./radio-card-label"
import type { UseRadioProps } from "./use-radio"
import { forwardRef } from "react"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import {
  cx,
  findChild,
  funcAll,
  getValidChildren,
  isEmpty,
  omitChildren,
} from "../../utils"
import { useFormControl } from "../form-control"
import { RadioCardAddon } from "./radio-card-addon"
import { RadioCardDescription } from "./radio-card-description"
import { RadioCardLabel } from "./radio-card-label"
import { RadioCardProvider, useRadioCardGroupContext } from "./radio-context"
import { useRadio } from "./use-radio"

interface RadioCardOptions {
  /**
   * The addon of the radio card.
   */
  addon?: ReactNode
  /**
   * The body of the radio card.
   */
  description?: ReactNode
  /**
   * The label of the radio card.
   */
  label?: ReactNode
  /**
   * If `true`, the icon will be displayed.
   *
   * @default true
   */
  withIcon?: boolean
  /**
   * Props for the footer of the radio card.
   */
  addonProps?: RadioCardAddonProps
  /**
   * Props for the description of the radio card.
   */
  descriptionProps?: RadioCardDescriptionProps
  /**
   * Props for the icon of the radio card.
   */
  iconProps?: HTMLUIProps
  /**
   * Props for input element.
   */
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  /**
   * Props for the label of the radio card.
   */
  labelProps?: RadioCardLabelProps
}

export interface RadioCardProps<Y extends number | string = string>
  extends Omit<HTMLUIProps<"label">, keyof UseRadioProps>,
    ThemeProps<"RadioCard">,
    UseRadioProps<Y>,
    RadioCardOptions {}

/**
 * `RadioCard` is a component used for allowing users to select one option from multiple choices.
 *
 * @see https://yamada-ui.com/components/forms/radio-card
 */
export const RadioCard = forwardRef(
  <Y extends number | string = string>(
    props: RadioCardProps<Y>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const group = useRadioCardGroupContext()
    const { value: groupValue, ...groupProps } = { ...group }
    const control = useFormControl(props)
    const [styles, mergedProps] = useComponentMultiStyle("RadioCard", {
      ...groupProps,
      ...props,
    })
    const {
      className,
      addon,
      children,
      description,
      disabled = groupProps.disabled ?? control.disabled,
      invalid = groupProps.invalid ?? control.invalid,
      label,
      readOnly = groupProps.readOnly ?? control.readOnly,
      required = groupProps.required ?? control.required,
      withIcon = true,
      addonProps,
      descriptionProps,
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

    const validChildren = getValidChildren(children)
    const customLabel = findChild(validChildren, RadioCardLabel)
    const customDescription = findChild(validChildren, RadioCardDescription)
    const customAddon = findChild(validChildren, RadioCardAddon)

    const computedChildren = !isEmpty(validChildren)
      ? omitChildren(
          validChildren,
          RadioCardLabel,
          RadioCardDescription,
          RadioCardAddon,
        )
      : children

    return (
      <RadioCardProvider value={{ styles, withIcon, getIconProps, iconProps }}>
        <ui.label
          className={cx("ui-radio-card", className)}
          {...getContainerProps(rest)}
          __css={{ ...styles.container }}
        >
          <ui.input
            className="ui-radio-card__input"
            {...getInputProps(
              {
                ...inputProps,
                tabIndex,
              },
              ref,
            )}
          />

          {customLabel ??
            (label ? (
              <RadioCardLabel {...labelProps}>{label}</RadioCardLabel>
            ) : null)}

          {customDescription ??
            (description ? (
              <RadioCardDescription {...descriptionProps}>
                {description}
              </RadioCardDescription>
            ) : null)}

          {customAddon ??
            (addon ? (
              <RadioCardAddon {...addonProps}>{addon}</RadioCardAddon>
            ) : null)}

          {computedChildren}
        </ui.label>
      </RadioCardProvider>
    )
  },
) as {
  <Y extends number | string = string>(
    props: RadioCardProps<Y> & RefAttributes<HTMLInputElement>,
  ): ReactElement
} & ComponentArgs

RadioCard.displayName = "RadioCard"
RadioCard.__ui__ = "RadioCard"
