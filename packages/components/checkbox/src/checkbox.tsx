import type {
  ComponentArgs,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { MotionProps } from "@yamada-ui/motion"
import type { Merge } from "@yamada-ui/utils"
import type {
  CSSProperties,
  ForwardedRef,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  Ref,
} from "react"
import type { UseCheckboxProps } from "./use-checkbox"
import { omitThemeProps, ui, useComponentMultiStyle } from "@yamada-ui/core"
import { useFormControl } from "@yamada-ui/form-control"
import { AnimatePresence, motion } from "@yamada-ui/motion"
import { cx, funcAll } from "@yamada-ui/utils"
import { cloneElement, forwardRef } from "react"
import { useCheckboxGroupContext } from "./checkbox-context"
import { useCheckbox } from "./use-checkbox"

interface CheckboxOptions {
  /**
   * The label of the checkbox.
   */
  label?: ReactNode
  /**
   * Props for icon component.
   */
  iconProps?: { children: ReactElement } & Omit<HTMLUIProps, "children">
  /**
   * Props for input element.
   */
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  /**
   * Props for label element.
   */
  labelProps?: HTMLUIProps<"span">
}

export interface CheckboxProps<Y extends number | string = string>
  extends Merge<HTMLUIProps<"label">, UseCheckboxProps<Y>>,
    ThemeProps<"Checkbox">,
    CheckboxOptions {}

/**
 * `Checkbox` is a component used for allowing users to select multiple values from multiple options.
 *
 * @see Docs https://yamada-ui.com/components/forms/checkbox
 */
export const Checkbox = forwardRef(
  <Y extends number | string = string>(
    props: CheckboxProps<Y>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const group = useCheckboxGroupContext()
    const { value: groupValue, ...groupProps } = { ...group }
    const control = useFormControl(props)
    const [styles, mergedProps] = useComponentMultiStyle("Checkbox", {
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

    computedProps.checked ??= computedProps.isChecked

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
      indeterminate,
      props: rest,
      getContainerProps,
      getIconProps,
      getInputProps,
      getLabelProps,
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
      indeterminate,
      invalid,
      isDisabled: disabled,
      isIndeterminate: indeterminate,
      isInvalid: invalid,
      isReadOnly: readOnly,
      isRequired: required,
      readOnly,
      required,
      __css: {
        opacity: checked || indeterminate ? 1 : 0,
        transform: checked || indeterminate ? "scale(1)" : "scale(0.95)",
        transitionDuration: "normal",
        transitionProperty: "transform",
      },
    })

    return (
      <ui.label
        className={cx("ui-checkbox", className)}
        {...getContainerProps()}
        __css={{
          alignItems: "center",
          cursor: "pointer",
          display: "inline-flex",
          gap,
          position: "relative",
          verticalAlign: "top",
          ...styles.container,
        }}
        {...rest}
      >
        <ui.input
          className="ui-checkbox__input"
          {...getInputProps(inputProps, ref)}
        />

        <ui.div
          className="ui-checkbox__icon"
          __css={{
            display: "inline-block",
            position: "relative",
            userSelect: "none",
            ...styles.icon,
          }}
          {...getIconProps(resolvedIconProps)}
        >
          {icon}
        </ui.div>

        <ui.span
          className="ui-checkbox__label"
          __css={{ ...styles.label }}
          {...getLabelProps(labelProps)}
        >
          {children ?? label}
        </ui.span>
      </ui.label>
    )
  },
) as {
  <Y extends number | string = string>(
    props: { ref?: Ref<HTMLInputElement> } & CheckboxProps<Y>,
  ): ReactElement
} & ComponentArgs

Checkbox.displayName = "Checkbox"
Checkbox.__ui__ = "Checkbox"

export type CheckboxIconProps = {
  /**
   * If `true`, the icon will be checked.
   *
   * @default false
   */
  checked?: boolean
  /**
   * If `true`, the icon will be indeterminate.
   *
   * @default false
   */
  indeterminate?: boolean
  /**
   * If `true`, the icon will be checked.
   *
   * @default false
   *
   * @deprecated Use `checked` instead.
   */
  isChecked?: boolean
  /**
   * If `true`, the icon will be indeterminate.
   *
   * @default false
   *
   * @deprecated Use `indeterminate` instead.
   */
  isIndeterminate?: boolean
} & FormControlOptions &
  MotionProps<"svg">

export const CheckboxIcon: FC<CheckboxIconProps> = ({
  isChecked,
  checked = isChecked,
  disabled: _disabled,
  isIndeterminate,
  indeterminate = isIndeterminate,
  invalid: _invalid,
  isDisabled: _isDisabled,
  isInvalid: _isInvalid,
  isReadOnly: _isReadOnly,
  isRequired: _isRequired,
  readOnly: _readOnly,
  required: _required,
  ...rest
}) => {
  return (
    <AnimatePresence initial={false}>
      {indeterminate || checked ? (
        <ui.div
          __css={{
            left: "50%",
            position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            style={
              {
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              } as CSSProperties
            }
            animate="checked"
            exit="unchecked"
            initial="unchecked"
            variants={{
              checked: { scale: 1 },
              unchecked: { scale: 0.5 },
            }}
          >
            {indeterminate ? (
              <CheckboxIndeterminateIcon {...rest} />
            ) : (
              <CheckboxCheckIcon {...rest} />
            )}
          </motion.div>
        </ui.div>
      ) : null}
    </AnimatePresence>
  )
}

CheckboxIcon.displayName = "CheckboxIcon"
CheckboxIcon.__ui__ = "CheckboxIcon"

interface CheckboxCheckIconProps extends MotionProps<"svg"> {}

const CheckboxCheckIcon: FC<CheckboxCheckIconProps> = (props) => {
  return (
    <motion.svg
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeDasharray: 16,
        strokeWidth: 2,
      }}
      variants={{
        checked: {
          opacity: 1,
          strokeDashoffset: 0,
          transition: { duration: 0.2 },
        },
        unchecked: {
          opacity: 0,
          strokeDashoffset: 16,
        },
      }}
      viewBox="0 0 12 10"
      width="1.2em"
      {...props}
    >
      <polyline points="1.5 6 4.5 9 10.5 1" />
    </motion.svg>
  )
}

CheckboxCheckIcon.displayName = "CheckboxCheckIcon"
CheckboxCheckIcon.__ui__ = "CheckboxCheckIcon"

interface CheckboxIndeterminateIconProps extends MotionProps<"svg"> {}

const CheckboxIndeterminateIcon: FC<CheckboxIndeterminateIconProps> = (
  props,
) => {
  return (
    <motion.svg
      style={{ stroke: "currentColor", strokeWidth: 4 }}
      variants={{
        checked: {
          opacity: 1,
          scaleX: 1,
          transition: {
            opacity: { duration: 0.02 },
            scaleX: { duration: 0 },
          },
        },
        unchecked: {
          opacity: 0,
          scaleX: 0.65,
        },
      }}
      viewBox="0 0 24 24"
      width="1.2em"
      {...props}
    >
      <line x1="21" x2="3" y1="12" y2="12" />
    </motion.svg>
  )
}

CheckboxIndeterminateIcon.displayName = "CheckboxIndeterminateIcon"
CheckboxIndeterminateIcon.__ui__ = "CheckboxIndeterminateIcon"
