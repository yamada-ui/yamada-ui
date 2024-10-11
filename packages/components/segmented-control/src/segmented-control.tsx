import type {
  CSSUIObject,
  FC,
  HTMLProps,
  HTMLUIProps,
  PropGetter,
  RequiredPropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import type {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  ReactElement,
} from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
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
import { useCallback, useEffect, useId, useRef, useState } from "react"

export interface SegmentedControlItem extends SegmentedControlButtonProps {
  label?: string
}

const { DescendantsContextProvider, useDescendant, useDescendants } =
  createDescendant<HTMLButtonElement>()

interface SegmentedControlContext {
  styles: { [key: string]: CSSUIObject | undefined }
  value: string
  getInputProps: RequiredPropGetter<
    {
      index: number
      isDisabled?: boolean
      isReadOnly?: boolean
    } & HTMLProps<"input">,
    HTMLProps<"input">
  >
  getLabelProps: RequiredPropGetter<
    {
      index: number
      value: string
      disabled?: boolean
      isDisabled?: boolean
      isReadOnly?: boolean
      readOnly?: boolean
    } & HTMLProps<"label">,
    HTMLProps<"label">
  >
}

const [SegmentedControlProvider, useSegmentedControl] =
  createContext<SegmentedControlContext>({
    name: "SegmentedControlContext",
    errorMessage: `useSegmentedControl returned is 'undefined'. Seems you forgot to wrap the components in "<SegmentedControl />"`,
  })

interface SegmentedControlOptions {
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * The initial value of the segmented control.
   */
  defaultValue?: string
  /**
   * If `true`, the segmented control will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, the segmented control will be readonly.
   *
   * @default false
   */
  isReadOnly?: boolean
  /**
   * If provided, generate segmented control buttons but based on items.
   *
   * @default '[]'
   */
  items?: SegmentedControlItem[]
  /**
   * The value of the segmented control.
   */
  value?: string
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: (value: string) => void
}

export interface SegmentedControlProps
  extends Omit<HTMLUIProps, "defaultValue" | "onChange" | "value">,
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
      id,
      name,
      className,
      children,
      defaultValue,
      isDisabled,
      isReadOnly,
      items = [],
      value: valueProp,
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

    const [value, setValue] = useControllableState({
      defaultValue,
      value: valueProp,
      onChange: onChangeRef,
    })

    const onChange = useCallback(
      (ev: ChangeEvent<HTMLInputElement>) => {
        if (isDisabled || isReadOnly) {
          ev.preventDefault()

          return
        }

        setValue(ev.target.value)
      },
      [isDisabled, isReadOnly, setValue],
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
        id,
        ref: mergeRefs(containerRef, ref),
        "aria-disabled": ariaAttr(isDisabled),
        "data-readonly": dataAttr(isReadOnly),
        onBlur: handlerAll(props.onBlur, onBlur),
      }),
      [id, isDisabled, isReadOnly, onBlur, rest],
    )

    const getInputProps: RequiredPropGetter<
      {
        index: number
        isDisabled?: boolean
        isReadOnly?: boolean
      } & HTMLProps<"input">,
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
        const checked = props.value === value

        return {
          ...props,
          id: `${id}-${index}`,
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
          "aria-disabled": ariaAttr(disabled),
          "data-checked": dataAttr(checked),
          "data-focus": dataAttr(index === focusedIndex),
          "data-readonly": dataAttr(readOnly),
          checked,
          disabled: disabled || readOnly,
          readOnly,
          onChange: handlerAll(props.onChange, (ev) =>
            !disabled && !readOnly
              ? onChange(ev as ChangeEvent<HTMLInputElement>)
              : {},
          ),
        }
      },
      [isDisabled, isReadOnly, value, id, name, focusedIndex, onChange],
    )

    const getLabelProps: RequiredPropGetter<
      {
        index: number
        value: string
        disabled?: boolean
        isDisabled?: boolean
        isReadOnly?: boolean
        readOnly?: boolean
      } & HTMLProps<"label">,
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
        const checked = props.value === value
        const focused = index === focusedIndex

        return {
          ...props,
          ref,
          "aria-disabled": ariaAttr(disabled),
          "data-checked": dataAttr(checked),
          "data-focus": dataAttr(focused),
          "data-focus-visible": dataAttr(focused && isFocusVisible),
          "data-readonly": dataAttr(readOnly),
          onFocus: handlerAll(
            props.onFocus as unknown as FocusEventHandler<HTMLLabelElement>,
            () => onFocus(index, disabled || readOnly || false),
          ),
          ...(disabled || readOnly
            ? {
                _active: {},
                _focus: {},
                _focusVisible: {},
                _hover: {},
                _invalid: {},
              }
            : {}),
        }
      },
      [focusedIndex, isDisabled, isFocusVisible, isReadOnly, onFocus, value],
    )

    useEffect(() => {
      return trackFocusVisible(setIsFocusVisible)
    }, [])

    const css: CSSUIObject = {
      alignItems: "center",
      display: "inline-flex",
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

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (value == null && defaultValue == null) {
      for (const child of computedChildren) {
        if (child.type !== SegmentedControlButton)
          if (
            (child.type as any).displayName !==
            SegmentedControlButton.displayName
          )
            continue

        const value = child.props.value

        setValue(value)

        break
      }
    }

    return (
      <DescendantsContextProvider value={descendants}>
        <SegmentedControlProvider
          value={{ styles, value, getInputProps, getLabelProps }}
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

SegmentedControl.displayName = "SegmentedControl"
SegmentedControl.__ui__ = "SegmentedControl"

interface SegmentedControlButtonOptions {
  /**
   * The value of the segmented control button.
   */
  value: string
  /**
   * Props for motion component.
   */
  motionProps?: MotionProps
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
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
      children,
      disabled,
      isDisabled,
      isReadOnly,
      readOnly,
      value,
      motionProps,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const [, isMounted] = useIsMounted({ rerender: true })
    const {
      styles,
      value: selectedValue,
      getInputProps,
      getLabelProps,
    } = useSegmentedControl()

    const { index, register } = useDescendant({
      disabled: isDisabled || isReadOnly,
    })

    const props = {
      disabled,
      index,
      isDisabled,
      isReadOnly,
      readOnly,
      value,
    }

    const css: CSSUIObject = {
      alignItems: "center",
      cursor: "pointer",
      display: "inline-flex",
      flex: "1 1 0%",
      justifyContent: "center",
      position: "relative",
      ...styles.button,
    }

    const isSelected = value === selectedValue

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
SegmentedControlButton.__ui__ = "SegmentedControlButton"

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
    h: "100%",
    position: "absolute",
    w: "100%",
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

SegmentedControlCursor.displayName = "SegmentedControlCursor"
SegmentedControlCursor.__ui__ = "SegmentedControlCursor"
