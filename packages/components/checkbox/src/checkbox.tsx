import type {
  FC,
  HTMLUIProps,
  ThemeProps,
  ComponentArgs,
  PropGetter,
} from "@yamada-ui/core"
import { ui, useComponentMultiStyle, omitThemeProps } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  useFormControl,
  useFormControlProps,
  formControlProperties,
} from "@yamada-ui/form-control"
import type { MotionProps } from "@yamada-ui/motion"
import { AnimatePresence, motion } from "@yamada-ui/motion"
import { trackFocusVisible } from "@yamada-ui/use-focus-visible"
import type { Dict, Merge } from "@yamada-ui/utils"
import {
  cx,
  useCallbackRef,
  useSafeLayoutEffect,
  useUpdateEffect,
  handlerAll,
  dataAttr,
  mergeRefs,
  funcAll,
  splitObject,
} from "@yamada-ui/utils"
import type {
  ChangeEvent,
  ChangeEventHandler,
  CSSProperties,
  FocusEventHandler,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactElement,
  SyntheticEvent,
  ForwardedRef,
  Ref,
} from "react"
import {
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useId,
} from "react"
import { useCheckboxGroupContext } from "./checkbox-context"

export interface UseCheckboxProps<Y extends string | number = string>
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
   * The value to be used in the checkbox input.
   */
  value?: Y
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
   * The callback invoked when the checked state changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the checkbox is focused.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the checkbox is blurred.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>
  /**
   * The tab-index property of the underlying input element.
   */
  tabIndex?: number
}

export const useCheckbox = <
  Y extends string | number = string,
  M extends Dict = Dict,
>({
  id,
  ...props
}: UseCheckboxProps<Y> & M) => {
  const uuid = useId()

  id ??= uuid

  const {
    id: _id,
    name,
    value,
    isChecked: isCheckedProp,
    defaultIsChecked,
    tabIndex,
    isIndeterminate,
    onChange: onChangeProp,
    ...computedProps
  } = useFormControlProps({ id, ...props })
  const [
    {
      required,
      disabled,
      readOnly,
      "aria-readonly": _ariaReadonly,
      onFocus: onFocusProp,
      onBlur: onBlurProp,
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
      "data-active": dataAttr(isActive),
      "data-hover": dataAttr(isHovered),
      "data-checked": dataAttr(checked),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocused && isFocusVisible),
      "data-indeterminate": dataAttr(isIndeterminate),
      "aria-hidden": true,
      onMouseDown: handlerAll(props.onMouseDown, (ev: React.MouseEvent) => {
        if (isFocused) ev.preventDefault()

        setActive(true)
      }),
      onMouseUp: handlerAll(props.onMouseUp, () => setActive(false)),
      onMouseEnter: handlerAll(props.onMouseEnter, () => setHovered(true)),
      onMouseLeave: handlerAll(props.onMouseLeave, () => setHovered(false)),
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
      ref: mergeRefs(inputRef, ref),
      id,
      type: "checkbox",
      name,
      value,
      tabIndex,
      required,
      disabled,
      readOnly,
      checked,
      "aria-checked": isIndeterminate ? "mixed" : checked,
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
    props: rest,
    isFocusVisible,
    isFocused,
    isHovered,
    isActive,
    isChecked: checked,
    isIndeterminate,
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
  iconProps?: Omit<HTMLUIProps<"span">, "children"> & { children: ReactElement }
  /**
   * Props for input element.
   */
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  /**
   * Props for label element.
   */
  labelProps?: HTMLUIProps<"span">
}

export interface CheckboxProps<Y extends string | number = string>
  extends Omit<Merge<HTMLUIProps<"label">, UseCheckboxProps<Y>>, "checked">,
    ThemeProps<"Checkbox">,
    CheckboxOptions {}

/**
 * `Checkbox` is a component used for allowing users to select multiple values from multiple options.
 *
 * @see Docs https://yamada-ui.com/components/forms/checkbox
 */
export const Checkbox = forwardRef(
  <Y extends string | number = string>(
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
      getContainerProps,
      getInputProps,
      getIconProps,
      getLabelProps,
      props: rest,
    } = useCheckbox({
      ...computedProps,
      isRequired,
      isReadOnly,
      isDisabled,
      isInvalid,
      isChecked: isCheckedProp,
      onChange,
    })

    const { children: customIcon, ...resolvedIconProps } = { ...iconProps }
    const cloneIcon = cloneElement(customIcon ?? <CheckboxIcon />, {
      __css: {
        opacity: isChecked || isIndeterminate ? 1 : 0,
        transform: isChecked || isIndeterminate ? "scale(1)" : "scale(0.95)",
        transitionProperty: "transform",
        transitionDuration: "normal",
      },
      isIndeterminate,
      isChecked,
      isRequired,
      isReadOnly,
      isDisabled,
      isInvalid,
    })

    return (
      <ui.label
        className={cx("ui-checkbox", className)}
        {...getContainerProps()}
        __css={{
          gap,
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
            pointerEvents: isReadOnly ? "none" : undefined,
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
  <Y extends string | number = string>(
    props: CheckboxProps<Y> & { ref?: Ref<HTMLInputElement> },
  ): JSX.Element
} & ComponentArgs

Checkbox.displayName = "Checkbox"
Checkbox.__ui__ = "Checkbox"

export type CheckboxIconProps = MotionProps<"svg"> &
  FormControlOptions & {
    /**
     * If `true`, the icon will be indeterminate.
     *
     * @default false
     */
    isIndeterminate?: boolean
    /**
     * If `true`, the icon will be checked.
     *
     * @default false
     */
    isChecked?: boolean
  }

export const CheckboxIcon: FC<CheckboxIconProps> = ({
  isIndeterminate,
  isChecked,
  isRequired: _isRequired,
  isReadOnly: _isReadOnly,
  isDisabled: _isDisabled,
  isInvalid: _isInvalid,
  ...rest
}) => {
  return (
    <AnimatePresence initial={false}>
      {isIndeterminate || isChecked ? (
        <ui.div
          __css={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            variants={{
              unchecked: { scale: 0.5 },
              checked: { scale: 1 },
            }}
            initial="unchecked"
            animate="checked"
            exit="unchecked"
            style={
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              } as CSSProperties
            }
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
      width="1.2em"
      viewBox="0 0 12 10"
      variants={{
        unchecked: {
          opacity: 0,
          strokeDashoffset: 16,
        },
        checked: {
          opacity: 1,
          strokeDashoffset: 0,
          transition: { duration: 0.2 },
        },
      }}
      style={{
        fill: "none",
        strokeWidth: 2,
        stroke: "currentColor",
        strokeDasharray: 16,
      }}
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
      width="1.2em"
      viewBox="0 0 24 24"
      variants={{
        unchecked: {
          scaleX: 0.65,
          opacity: 0,
        },
        checked: {
          scaleX: 1,
          opacity: 1,
          transition: {
            scaleX: { duration: 0 },
            opacity: { duration: 0.02 },
          },
        },
      }}
      style={{ stroke: "currentColor", strokeWidth: 4 }}
      {...props}
    >
      <line x1="21" x2="3" y1="12" y2="12" />
    </motion.svg>
  )
}

CheckboxIndeterminateIcon.displayName = "CheckboxIndeterminateIcon"
CheckboxIndeterminateIcon.__ui__ = "CheckboxIndeterminateIcon"
