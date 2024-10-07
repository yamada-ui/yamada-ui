import type {
  ComponentArgs,
  FC,
  HTMLUIProps,
  PropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { MotionProps } from "@yamada-ui/motion"
import type { Dict, Merge } from "@yamada-ui/utils"
import type {
  ChangeEvent,
  ChangeEventHandler,
  CSSProperties,
  FocusEventHandler,
  ForwardedRef,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactElement,
  Ref,
  SyntheticEvent,
} from "react"
import { omitThemeProps, ui, useComponentMultiStyle } from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControl,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { AnimatePresence, motion } from "@yamada-ui/motion"
import { trackFocusVisible } from "@yamada-ui/use-focus-visible"
import {
  cx,
  dataAttr,
  funcAll,
  handlerAll,
  mergeRefs,
  splitObject,
  useCallbackRef,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "@yamada-ui/utils"
import {
  cloneElement,
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import { useCheckboxGroupContext } from "./checkbox-context"

export interface UseCheckboxProps<Y extends number | string = string>
  extends FormControlOptions {
  /**
   * id assigned to input.
   */
  id?: string
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * If `true`, the checkbox will be initially checked.
   *
   * @default false
   */
  defaultIsChecked?: boolean
  /**
   * If `true`, the checkbox will be checked.
   *
   * @default false
   */
  isChecked?: boolean
  /**
   * If `true`, the checkbox will be indeterminate.
   *
   * @default false
   */
  isIndeterminate?: boolean
  /**
   * The tab-index property of the underlying input element.
   */
  tabIndex?: number
  /**
   * The value to be used in the checkbox input.
   */
  value?: Y
  /**
   * The callback invoked when the checkbox is blurred.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the checked state changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the checkbox is focused.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>
}

export const useCheckbox = <
  Y extends number | string = string,
  M extends Dict = Dict,
>({
  id,
  ...props
}: M & UseCheckboxProps<Y>) => {
  const uuid = useId()

  id ??= uuid

  const {
    id: _id,
    name,
    defaultIsChecked,
    isChecked: isCheckedProp,
    isIndeterminate,
    tabIndex,
    value,
    onChange: onChangeProp,
    ...computedProps
  } = useFormControlProps({ id, ...props })
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

  const [isFocusVisible, setIsFocusVisible] = useState<boolean>(false)
  const [isFocused, setFocused] = useState<boolean>(false)
  const [isHovered, setHovered] = useState<boolean>(false)
  const [isActive, setActive] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const [isLabel, setIsLabel] = useState<boolean>(true)

  const [isChecked, setIsChecked] = useState<boolean>(!!defaultIsChecked)

  const isControlled = isCheckedProp !== undefined
  const checked = isControlled ? (isCheckedProp as boolean) : isChecked

  const onChange = useCallbackRef(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (readOnly || disabled) {
        ev.preventDefault()

        return
      }

      if (!isControlled)
        setIsChecked(!checked || isIndeterminate ? true : ev.target.checked)

      onChangeProp?.(ev)
    },
    [readOnly, disabled, isControlled, checked, isIndeterminate],
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

  useEffect(() => {
    return trackFocusVisible(setIsFocusVisible)
  }, [])

  useSafeLayoutEffect(() => {
    if (inputRef.current)
      inputRef.current.indeterminate = Boolean(isIndeterminate)
  }, [isIndeterminate])

  useUpdateEffect(() => {
    if (disabled) setFocused(false)
  }, [disabled, setFocused])

  useSafeLayoutEffect(() => {
    if (!inputRef.current?.form) return

    inputRef.current.form.onreset = () => setIsChecked(!!defaultIsChecked)
  }, [])

  useSafeLayoutEffect(() => {
    if (!inputRef.current) return

    if (inputRef.current.checked !== checked)
      setIsChecked(inputRef.current.checked)
  }, [inputRef.current])

  const getContainerProps: PropGetter<"label"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref: mergeRefs(ref, (el: HTMLElement | undefined) => {
        if (el) setIsLabel(el.tagName === "LABEL")
      }),
      "data-checked": dataAttr(checked),
      onClick: handlerAll(props.onClick, () => {
        if (isLabel) return

        inputRef.current?.click()

        requestAnimationFrame(() => inputRef.current?.focus())
      }),
    }),
    [checked, isLabel, formControlProps],
  )

  const getIconProps: PropGetter = useCallback(
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
      "data-indeterminate": dataAttr(isIndeterminate),
      onMouseDown: handlerAll(props.onMouseDown, (ev: React.MouseEvent) => {
        if (isFocused) ev.preventDefault()

        setActive(true)
      }),
      onMouseEnter: handlerAll(props.onMouseEnter, () => setHovered(true)),
      onMouseLeave: handlerAll(props.onMouseLeave, () => setHovered(false)),
      onMouseUp: handlerAll(props.onMouseUp, () => setActive(false)),
    }),
    [
      isActive,
      checked,
      isFocused,
      isHovered,
      isFocusVisible,
      isIndeterminate,
      formControlProps,
    ],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      id,
      ref: mergeRefs(inputRef, ref),
      type: "checkbox",
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
      "aria-checked": isIndeterminate ? "mixed" : checked,
      checked,
      disabled,
      readOnly,
      required,
      tabIndex,
      value,
      onBlur: handlerAll(props.onBlur, onBlur, () => setFocused(false)),
      onChange: handlerAll(props.onChange, onChange),
      onFocus: handlerAll(props.onFocus, onFocus, () => setFocused(true)),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      onKeyUp: handlerAll(props.onKeyUp, onKeyUp),
    }),
    [
      isIndeterminate,
      formControlProps,
      id,
      name,
      value,
      tabIndex,
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
      "data-checked": dataAttr(checked),
      onMouseDown: handlerAll(props.onMouseDown, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
      onTouchStart: handlerAll(props.onTouchStart, (ev: SyntheticEvent) => {
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
    isIndeterminate,
    props: rest,
    getContainerProps,
    getIconProps,
    getInputProps,
    getLabelProps,
  }
}

export type UseCheckboxReturn = ReturnType<typeof useCheckbox>

interface CheckboxOptions {
  /**
   * Props for icon component.
   */
  iconProps?: { children: ReactElement } & Omit<HTMLUIProps<"span">, "children">
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
  extends Omit<Merge<HTMLUIProps<"label">, UseCheckboxProps<Y>>, "checked">,
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
        ? groupValue.includes(computedProps.value)
        : computedProps.isChecked
    const onChange =
      groupProps.onChange && computedProps.value
        ? funcAll(groupProps.onChange, computedProps.onChange)
        : computedProps.onChange

    const {
      isChecked,
      isIndeterminate,
      props: rest,
      getContainerProps,
      getIconProps,
      getInputProps,
      getLabelProps,
    } = useCheckbox({
      ...computedProps,
      isChecked: isCheckedProp,
      isDisabled,
      isInvalid,
      isReadOnly,
      isRequired,
      onChange,
    })

    const { children: customIcon, ...resolvedIconProps } = { ...iconProps }
    const cloneIcon = cloneElement(customIcon ?? <CheckboxIcon />, {
      isChecked,
      isDisabled,
      isIndeterminate,
      isInvalid,
      isReadOnly,
      isRequired,
      __css: {
        opacity: isChecked || isIndeterminate ? 1 : 0,
        transform: isChecked || isIndeterminate ? "scale(1)" : "scale(0.95)",
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

        <ui.span
          className="ui-checkbox__icon"
          __css={{
            display: "inline-block",
            pointerEvents: isReadOnly ? "none" : undefined,
            position: "relative",
            userSelect: "none",
            ...styles.icon,
          }}
          {...getIconProps(resolvedIconProps)}
        >
          {cloneIcon}
        </ui.span>

        <ui.span
          className="ui-checkbox__label"
          __css={{ ...styles.label }}
          {...getLabelProps(labelProps)}
        >
          {children}
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
  isChecked?: boolean
  /**
   * If `true`, the icon will be indeterminate.
   *
   * @default false
   */
  isIndeterminate?: boolean
} & FormControlOptions &
  MotionProps<"svg">

export const CheckboxIcon: FC<CheckboxIconProps> = ({
  isChecked,
  isDisabled: _isDisabled,
  isIndeterminate,
  isInvalid: _isInvalid,
  isReadOnly: _isReadOnly,
  isRequired: _isRequired,
  ...rest
}) => {
  return (
    <AnimatePresence initial={false}>
      {isIndeterminate || isChecked ? (
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
            {isIndeterminate ? (
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
