import type {
  CSSUIObject,
  HTMLProps,
  HTMLUIProps,
  PropGetter,
  RequiredPropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { LayoutGroup, motion } from "@yamada-ui/motion"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { createDescendant } from "@yamada-ui/use-descendant"
import { trackFocusVisible } from "@yamada-ui/use-focus-visible"
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  getValidChildren,
  handlerAll,
  mergeRefs,
  useCallbackRef,
  useIsMounted,
} from "@yamada-ui/utils"
import type {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  ReactElement,
} from "react"
import { useCallback, useEffect, useId, useRef, useState } from "react"

export interface SegmentedControlItem extends SegmentedControlButtonProps {
  label?: string
}

const { DescendantsContextProvider, useDescendants, useDescendant } =
  createDescendant<HTMLButtonElement>()

interface SegmentedControlContext {
  selectedValue: string
  getInputProps: RequiredPropGetter<
    HTMLProps<"input"> & {
      index: number
      isDisabled?: boolean
      isReadOnly?: boolean
    },
    HTMLProps<"input">
  >
  getLabelProps: RequiredPropGetter<
    HTMLProps<"label"> & {
      value: string
      index: number
      isDisabled?: boolean
      isReadOnly?: boolean
      disabled?: boolean
      readOnly?: boolean
    },
    HTMLProps<"label">
  >
  styles: { [key: string]: CSSUIObject }
}

const [SegmentedControlProvider, useSegmentedControl] =
  createContext<SegmentedControlContext>({
    strict: false,
    name: "SegmentedControlContext",
  })

interface SegmentedControlOptions {
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * The value of the segmented control.
   */
  value?: string
  /**
   * The initial value of the segmented control.
   */
  defaultValue?: string
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: (value: string) => void
  /**
   * If `true`, the segmented control will be readonly.
   *
   * @default false
   */
  isReadOnly?: boolean
  /**
   * If `true`, the segmented control will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If provided, generate segmented control buttons but based on items.
   *
   * @default '[]'
   */
  items?: SegmentedControlItem[]
}

export interface SegmentedControlProps
  extends Omit<HTMLUIProps, "value" | "defaultValue" | "onChange">,
    ThemeProps<"SegmentedControl">,
    SegmentedControlOptions {}

/**
 * `SegmentedControl` is a component used for allowing users to select one option from multiple choices.
 *
 * @see Docs https://yamada-ui.com/components/forms/segmented-control
 */
export const SegmentedControl = forwardRef<SegmentedControlProps, "div">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle(
      "SegmentedControl",
      props,
    )
    let {
      className,
      id,
      name,
      isReadOnly,
      isDisabled,
      children,
      items = [],
      value,
      defaultValue,
      onChange: onChangeProp,
      ...rest
    } = omitThemeProps(mergedProps)
    const uuid = useId()

    id ??= uuid
    name ??= `segmented-control-${uuid}`

    const onChangeRef = useCallbackRef(onChangeProp)

    const descendants = useDescendants()

    const [focusedIndex, setFocusedIndex] = useState<number>(-1)
    const [isFocusVisible, setIsFocusVisible] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const [selectedValue, setSelectedValue] = useControllableState({
      value,
      defaultValue,
      onChange: onChangeRef,
    })

    const onChange = useCallback(
      (ev: ChangeEvent<HTMLInputElement>) => {
        if (isDisabled || isReadOnly) {
          ev.preventDefault()

          return
        }

        setSelectedValue(ev.target.value)
      },
      [isDisabled, isReadOnly, setSelectedValue],
    )

    const onFocus = useCallback(
      (index: number, skip: boolean) => {
        if (isDisabled) return

        if (skip) {
          const next = descendants.enabledNextValue(index)

          if (next) setFocusedIndex(next.index)
        } else {
          setFocusedIndex(index)
        }
      },
      [descendants, isDisabled],
    )

    const onBlur = useCallback(() => setFocusedIndex(-1), [])

    const getContainerProps: PropGetter = useCallback(
      (props = {}, ref = null) => ({
        ...rest,
        ...props,
        ref: mergeRefs(containerRef, ref),
        id,
        "aria-disabled": ariaAttr(isDisabled),
        "data-readonly": dataAttr(isReadOnly),
        onBlur: handlerAll(props.onBlur, onBlur),
      }),
      [id, isDisabled, isReadOnly, onBlur, rest],
    )

    const getInputProps: RequiredPropGetter<
      HTMLProps<"input"> & {
        index: number
        isDisabled?: boolean
        isReadOnly?: boolean
      },
      HTMLUIProps<"input">
    > = useCallback(
      (
        {
          index,
          isDisabled: isDisabledProp,
          isReadOnly: isReadOnlyProp,
          ...props
        },
        ref = null,
      ) => {
        const disabled = props.disabled ?? isDisabledProp ?? isDisabled
        const readOnly = props.readOnly ?? isReadOnlyProp ?? isReadOnly
        const checked = props.value === selectedValue

        return {
          ...props,
          ref,
          id: `${id}-${index}`,
          type: "radio",
          name,
          disabled: disabled || readOnly,
          readOnly,
          checked,
          "aria-disabled": ariaAttr(disabled),
          "data-readonly": dataAttr(readOnly),
          "data-checked": dataAttr(checked),
          "data-focus": dataAttr(index === focusedIndex),
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
          onChange: handlerAll(props.onChange, (ev) =>
            !disabled && !readOnly
              ? onChange(ev as ChangeEvent<HTMLInputElement>)
              : {},
          ),
        }
      },
      [isDisabled, isReadOnly, selectedValue, id, name, focusedIndex, onChange],
    )

    const getLabelProps: RequiredPropGetter<
      HTMLProps<"label"> & {
        value: string
        index: number
        isDisabled?: boolean
        isReadOnly?: boolean
        disabled?: boolean
        readOnly?: boolean
      },
      HTMLProps<"label">
    > = useCallback(
      (
        {
          index,
          isDisabled: isDisabledProp,
          isReadOnly: isReadOnlyProp,
          ...props
        },
        ref = null,
      ) => {
        const disabled = props.disabled ?? isDisabledProp ?? isDisabled
        const readOnly = props.readOnly ?? isReadOnlyProp ?? isReadOnly
        const checked = props.value === selectedValue
        const focused = index === focusedIndex

        return {
          ...props,
          ref,
          "aria-disabled": ariaAttr(disabled),
          "data-readonly": dataAttr(readOnly),
          "data-checked": dataAttr(checked),
          "data-focus": dataAttr(focused),
          "data-focus-visible": dataAttr(focused && isFocusVisible),
          onFocus: handlerAll(
            props.onFocus as unknown as FocusEventHandler<HTMLLabelElement>,
            () => onFocus(index, disabled || readOnly || false),
          ),
          ...(disabled || readOnly
            ? {
                _hover: {},
                _active: {},
                _focus: {},
                _invalid: {},
                _focusVisible: {},
              }
            : {}),
        }
      },
      [
        focusedIndex,
        isDisabled,
        isFocusVisible,
        isReadOnly,
        onFocus,
        selectedValue,
      ],
    )

    useEffect(() => {
      return trackFocusVisible(setIsFocusVisible)
    }, [])

    const css: CSSUIObject = {
      display: "inline-flex",
      alignItems: "center",
      ...styles.container,
    }

    const validChildren = getValidChildren(children)
    let computedChildren: ReactElement[] = []

    if (!validChildren.length && items.length) {
      computedChildren = items.map(({ label, value, ...props }, i) => (
        <SegmentedControlButton key={i} value={value} {...props}>
          {label}
        </SegmentedControlButton>
      ))
    } else {
      computedChildren = validChildren
    }

    if (selectedValue == null && defaultValue == null) {
      for (const child of computedChildren) {
        if (child.type !== SegmentedControlButton)
          if (
            (child.type as any).displayName !==
            SegmentedControlButton.displayName
          )
            continue

        const value = child.props.value

        setSelectedValue(value)

        break
      }
    }

    return (
      <DescendantsContextProvider value={descendants}>
        <SegmentedControlProvider
          value={{ getInputProps, getLabelProps, styles, selectedValue }}
        >
          <LayoutGroup id={id}>
            <ui.div
              {...getContainerProps({}, ref)}
              className={cx("ui-segmented-control", className)}
              __css={css}
            >
              {computedChildren}
            </ui.div>
          </LayoutGroup>
        </SegmentedControlProvider>
      </DescendantsContextProvider>
    )
  },
)

interface SegmentedControlButtonOptions {
  /**
   * The value of the segmented control button.
   */
  value: string
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * Props for motion component.
   */
  motionProps?: MotionProps
}

export interface SegmentedControlButtonProps
  extends Omit<HTMLUIProps<"label">, "onChange">,
    Pick<SegmentedControlProps, "isDisabled" | "isReadOnly">,
    SegmentedControlButtonOptions {}

export const SegmentedControlButton = forwardRef<
  SegmentedControlButtonProps,
  "input"
>(
  (
    {
      className,
      disabled,
      readOnly,
      isDisabled,
      isReadOnly,
      value,
      onChange,
      children,
      motionProps,
      ...rest
    },
    ref,
  ) => {
    const [, isMounted] = useIsMounted({ rerender: true })
    const { selectedValue, getInputProps, getLabelProps, styles } =
      useSegmentedControl()

    const { index, register } = useDescendant({
      disabled: isDisabled || isReadOnly,
    })

    const props = {
      index,
      value,
      disabled,
      readOnly,
      isDisabled,
      isReadOnly,
    }

    const css: CSSUIObject = {
      position: "relative",
      cursor: "pointer",
      flex: "1 1 0%",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      ...styles.button,
    }

    const isSelected = selectedValue === value

    return (
      <ui.label
        {...getLabelProps(props)}
        className={cx("ui-segmented-control__button", className)}
        __css={css}
        {...rest}
      >
        <ui.input
          {...getInputProps({ onChange, ...props }, mergeRefs(register, ref))}
        />
        {isSelected && isMounted ? (
          <SegmentedControlCursor {...motionProps} />
        ) : null}
        <ui.span zIndex="1">{children}</ui.span>
      </ui.label>
    )
  },
)

SegmentedControlButton.displayName = "SegmentedControlButton"

interface SegmentedControlCursorProps extends MotionProps {
  className?: string
}

const SegmentedControlCursor: FC<SegmentedControlCursorProps> = ({
  className,
  transition,
  ...rest
}) => {
  const { styles } = useSegmentedControl()

  const css: CSSUIObject = {
    position: "absolute",
    w: "100%",
    h: "100%",
    ...styles.cursor,
  }

  return (
    <motion.div
      className={cx("ui-segmented-control__cursor", className)}
      layoutDependency={false}
      layoutId="cursor"
      transition={{
        type: "spring",
        bounce: 0.15,
        duration: 0.4,
        ...transition,
      }}
      __css={css}
      {...rest}
    />
  )
}
