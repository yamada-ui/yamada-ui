import type {
  ForwardedRef,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  RefAttributes,
} from "react"
import type {
  ComponentArgs,
  HTMLUIProps,
  HTMLUIPropsWithoutRef,
  ThemeProps,
} from "../../core"
import type { Merge } from "../../utils"
import type { CheckboxCardAddonProps } from "./checkbox-card-addon"
import type { CheckboxCardDescriptionProps } from "./checkbox-card-description"
import type { CheckboxCardLabelProps } from "./checkbox-card-label"
import type { UseCheckboxProps } from "./use-checkbox"
import { cloneElement, forwardRef } from "react"
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
import { CheckboxIcon } from "./checkbox"
import { CheckboxCardAddon } from "./checkbox-card-addon"
import { CheckboxCardDescription } from "./checkbox-card-description"
import { CheckboxCardLabel } from "./checkbox-card-label"
import { CheckboxCardProvider } from "./checkbox-context"
import { useCheckboxCardGroupContext } from "./checkbox-context"
import { useCheckbox } from "./use-checkbox"

interface CheckboxCardOptions {
  /**
   * The addon of the checkbox card.
   */
  addon?: ReactNode
  /**
   * The body of the checkbox card.
   */
  description?: ReactNode
  /**
   * The label of the checkbox card.
   */
  label?: ReactNode
  /**
   * If `true`, the icon will be displayed.
   *
   * @default true
   */
  withIcon?: boolean
  /**
   * Props for the footer of the checkbox card.
   */
  addonProps?: CheckboxCardAddonProps
  /**
   * Props for the description of the checkbox card.
   */
  descriptionProps?: CheckboxCardDescriptionProps
  /**
   * Props for the icon of the checkbox card.
   */
  iconProps?: { children: ReactElement } & Omit<HTMLUIProps, "children">
  /**
   * Props for input element.
   */
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  /**
   * Props for the label of the checkbox card.
   */
  labelProps?: CheckboxCardLabelProps
}

export interface CheckboxCardProps<Y extends number | string = string>
  extends Merge<HTMLUIPropsWithoutRef<"label">, UseCheckboxProps<Y>>,
    RefAttributes<HTMLInputElement>,
    ThemeProps<"CheckboxCard">,
    CheckboxCardOptions {}

/**
 * `CheckboxCard` is a component used for allowing users to select multiple values from multiple options.
 *
 * @see Docs https://yamada-ui.com/components/forms/checkbox-card
 */
export const CheckboxCard = forwardRef(
  <Y extends number | string = string>(
    props: CheckboxCardProps<Y>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const group = useCheckboxCardGroupContext()
    const { value: groupValue, ...groupProps } = { ...group }
    const control = useFormControl(props)
    const [styles, mergedProps] = useComponentMultiStyle("CheckboxCard", {
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
        ? groupValue.includes(computedProps.value)
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
    } = useCheckbox({
      ...computedProps,
      checked: checkedProp,
      disabled,
      invalid,
      readOnly,
      required,
      onChange,
    })

    const { children: customIcon, ...resolvedIconProps } = { ...iconProps }
    const icon = cloneElement(customIcon ?? <CheckboxIcon />, {
      checked,
      disabled,
      invalid,
      readOnly,
      required,
      __css: {
        opacity: checked ? 1 : 0,
        transform: checked ? "scale(1)" : "scale(0.95)",
        transitionDuration: "moderate",
        transitionProperty: "transform",
      },
    })

    const validChildren = getValidChildren(children)
    const customLabel = findChild(validChildren, CheckboxCardLabel)
    const customDescription = findChild(validChildren, CheckboxCardDescription)
    const customAddon = findChild(validChildren, CheckboxCardAddon)

    const computedChildren = !isEmpty(validChildren)
      ? omitChildren(
          validChildren,
          CheckboxCardLabel,
          CheckboxCardDescription,
          CheckboxCardAddon,
        )
      : children

    return (
      <CheckboxCardProvider
        value={{
          icon,
          styles,
          withIcon,
          getIconProps,
          iconProps: resolvedIconProps,
        }}
      >
        <ui.label
          className={cx("ui-checkbox-card", className)}
          {...getContainerProps(rest)}
          __css={{ ...styles.container }}
        >
          <ui.input
            className="ui-checkbox-card__input"
            {...getInputProps(inputProps, ref)}
          />

          {customLabel ??
            (label ? (
              <CheckboxCardLabel {...labelProps}>{label}</CheckboxCardLabel>
            ) : null)}

          {customDescription ??
            (description ? (
              <CheckboxCardDescription {...descriptionProps}>
                {description}
              </CheckboxCardDescription>
            ) : null)}

          {customAddon ??
            (addon ? (
              <CheckboxCardAddon {...addonProps}>{addon}</CheckboxCardAddon>
            ) : null)}

          {computedChildren}
        </ui.label>
      </CheckboxCardProvider>
    )
  },
) as {
  <Y extends number | string = string>(
    props: CheckboxCardProps<Y> & RefAttributes<HTMLInputElement>,
  ): ReactElement
} & ComponentArgs

CheckboxCard.displayName = "CheckboxCard"
CheckboxCard.__ui__ = "CheckboxCard"
