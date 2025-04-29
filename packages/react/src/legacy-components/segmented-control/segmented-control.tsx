import type {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  ReactElement,
} from "react"
import type { MotionProps } from "../../components/motion"
import type {
  CSSUIObject,
  FC,
  HTMLProps,
  HTMLUIProps,
  PropGetter,
  RequiredPropGetter,
  ThemeProps,
} from "../../core"
import { LayoutGroup } from "motion/react"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import { motion } from "../../components/motion"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendant } from "../../hooks/use-descendant"
import { trackFocusVisible } from "../../hooks/use-focus-visible"
import { useMounted } from "../../hooks/use-mounted"
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  getValidChildren,
  handlerAll,
  mergeRefs,
  useCallbackRef,
} from "../../utils"

export interface SegmentedControlItem extends SegmentedControlButtonProps {
  label?: string
}

const { DescendantsContextProvider, useDescendant, useDescendants } =
  createDescendant<HTMLButtonElement>()

interface SegmentedControlContext {
  styles: { [key: string]: CSSUIObject | undefined }
  value: string
  getInputProps: RequiredPropGetter<
    { index: number } & HTMLProps<"input">,
    HTMLProps<"input">
  >
  getLabelProps: RequiredPropGetter<
    {
      index: number
      value: string
      disabled?: boolean
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
  disabled?: boolean
  /**
   * If `true`, the segmented control will be disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  /**
   * If `true`, the segmented control will be readonly.
   *
   * @default false
   *
   * @deprecated Use `readOnly` instead.
   */
  isReadOnly?: boolean
  /**
   * If provided, generate segmented control buttons but based on items.
   *
   * @default '[]'
   */
  items?: SegmentedControlItem[]
  /**
   * If `true`, the segmented control will be readonly.
   *
   * @default false
   */
  readOnly?: boolean
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
 * @see https://yamada-ui.com/components/forms/segmented-control
 */
export const SegmentedControl = forwardRef<SegmentedControlProps, "div">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle(
      "SegmentedControl",
      props,
    )
    const uuid = useId()
    const {
      id = uuid,
      name = `segmented-control-${uuid}`,
      className,
      children,
      defaultValue,
      isDisabled,
      disabled = isDisabled,
      isReadOnly,
      items = [],
      readOnly = isReadOnly,
      value: valueProp,
      onChange: onChangeProp,
      ...rest
    } = omitThemeProps(mergedProps)
    const containerRef = useRef<HTMLDivElement>(null)
    const descendants = useDescendants()
    const [focusedIndex, setFocusedIndex] = useState<number>(-1)
    const [focusVisible, setFocusVisible] = useState<boolean>(false)
    const onChangeRef = useCallbackRef(onChangeProp)
    const [value, setValue] = useControllableState({
      defaultValue,
      value: valueProp,
      onChange: onChangeRef,
    })

    const onChange = useCallback(
      (ev: ChangeEvent<HTMLInputElement>) => {
        if (disabled || readOnly) {
          ev.preventDefault()

          return
        }

        setValue(ev.target.value)
      },
      [disabled, readOnly, setValue],
    )

    const onFocus = useCallback(
      (index: number, skip: boolean) => {
        if (disabled) return

        if (skip) {
          const next = descendants.enabledNextValue(index)

          if (next) setFocusedIndex(next.index)
        } else {
          setFocusedIndex(index)
        }
      },
      [descendants, disabled],
    )

    const onBlur = useCallback(() => setFocusedIndex(-1), [])

    const getContainerProps: PropGetter = useCallback(
      (props = {}, ref = null) => ({
        "aria-disabled": ariaAttr(disabled),
        "data-readonly": dataAttr(readOnly),
        role: "radiogroup",
        ...rest,
        ...props,
        id,
        ref: mergeRefs(containerRef, ref),
        onBlur: handlerAll(props.onBlur, onBlur),
      }),
      [id, disabled, readOnly, onBlur, rest],
    )

    const getInputProps: RequiredPropGetter<
      { index: number } & HTMLProps<"input">,
      HTMLUIProps<"input">
    > = useCallback(
      ({ index, ...props }, ref = null) => {
        const trulyDisabled = props.disabled ?? disabled
        const trulyReadOnly = props.readOnly ?? readOnly
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
          "aria-disabled": ariaAttr(trulyDisabled),
          "data-checked": dataAttr(checked),
          "data-focus": dataAttr(index === focusedIndex),
          "data-readonly": dataAttr(trulyReadOnly),
          checked,
          disabled: trulyDisabled || trulyReadOnly,
          readOnly: trulyReadOnly,
          onChange: handlerAll(props.onChange, (ev) =>
            !trulyDisabled && !trulyReadOnly
              ? onChange(ev as ChangeEvent<HTMLInputElement>)
              : {},
          ),
        }
      },
      [disabled, readOnly, value, id, name, focusedIndex, onChange],
    )

    const getLabelProps: RequiredPropGetter<
      {
        index: number
        value: string
        disabled?: boolean
        readOnly?: boolean
      } & HTMLProps<"label">,
      HTMLProps<"label">
    > = useCallback(
      ({ index, ...props }, ref = null) => {
        const trulyDisabled = props.disabled ?? disabled
        const trulyReadOnly = props.readOnly ?? readOnly
        const checked = props.value === value
        const focused = index === focusedIndex

        return {
          ...props,
          ref,
          "aria-disabled": ariaAttr(trulyDisabled),
          "data-checked": dataAttr(checked),
          "data-focus": dataAttr(focused),
          "data-focus-visible": dataAttr(focused && focusVisible),
          "data-readonly": dataAttr(trulyReadOnly),
          onFocus: handlerAll(
            props.onFocus as unknown as FocusEventHandler<HTMLLabelElement>,
            () => onFocus(index, trulyDisabled || trulyReadOnly || false),
          ),
          ...(trulyDisabled || trulyReadOnly
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
      [focusedIndex, disabled, readOnly, focusVisible, onFocus, value],
    )

    useEffect(() => {
      return trackFocusVisible(setFocusVisible)
    }, [])

    const validChildren = getValidChildren(children)
    let computedChildren: ReactElement<any>[] = []

    if (!validChildren.length && items.length) {
      computedChildren = items.map(({ label, value, ...props }, i) => (
        <SegmentedControlButton key={i} value={value} {...props}>
          {label}
        </SegmentedControlButton>
      ))
    } else {
      computedChildren = validChildren
    }

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
              __css={styles.container}
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
    Pick<
      SegmentedControlProps,
      "disabled" | "isDisabled" | "isReadOnly" | "readOnly"
    >,
    SegmentedControlButtonOptions {}

export const SegmentedControlButton = forwardRef<
  SegmentedControlButtonProps,
  "input"
>(
  (
    {
      className,
      children,
      isDisabled,
      disabled = isDisabled,
      isReadOnly,
      readOnly = isReadOnly,
      value,
      motionProps,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const [, mounted] = useMounted({ rerender: true })
    const {
      styles,
      value: selectedValue,
      getInputProps,
      getLabelProps,
    } = useSegmentedControl()
    const { index, register } = useDescendant({
      disabled: disabled || readOnly,
    })
    const props = {
      disabled,
      index,
      readOnly,
      value,
    }

    const selected = value === selectedValue

    return (
      <ui.label
        {...getLabelProps(props)}
        className={cx("ui-segmented-control__button", className)}
        __css={styles.button}
        {...rest}
      >
        <ui.input
          {...getInputProps({ onChange, ...props }, mergeRefs(register, ref))}
        />
        {selected && mounted ? (
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
      __css={styles.cursor}
      {...rest}
    />
  )
}

SegmentedControlCursor.displayName = "SegmentedControlCursor"
SegmentedControlCursor.__ui__ = "SegmentedControlCursor"
