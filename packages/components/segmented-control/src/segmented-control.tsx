import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { LayoutGroup, Motion } from "@yamada-ui/motion"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { createDescendant } from "@yamada-ui/use-descendant"
import { trackFocusVisible } from "@yamada-ui/use-focus-visible"
import type { PropGetter, RequiredPropGetter } from "@yamada-ui/utils"
import {
  ariaAttr,
  createContext,
  cx,
  dataAttr,
  getValidChildren,
  handlerAll,
  mergeRefs,
  omitObject,
  useCallbackRef,
  useIsMounted,
} from "@yamada-ui/utils"
import type { ChangeEvent, ChangeEventHandler, FC, ReactElement } from "react"
import { useCallback, useEffect, useId, useRef, useState } from "react"

export type SegmentedControlItem = SegmentedControlButtonProps & {
  label?: string
}

const { DescendantsContextProvider, useDescendants, useDescendant } =
  createDescendant<HTMLButtonElement>()

type SegmentedControlContext = {
  selectedValue: string
  getInputProps: RequiredPropGetter<{ index: number }>
  getLabelProps: RequiredPropGetter<{ index: number }>
  styles: Record<string, CSSUIObject>
}

const [SegmentedControlProvider, useSegmentedControl] =
  createContext<SegmentedControlContext>({
    strict: false,
    name: "SegmentedControlContext",
  })

type SegmentedControlOptions = {
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

export type SegmentedControlProps = Omit<
  HTMLUIProps<"div">,
  "value" | "defaultValue" | "onChange"
> &
  ThemeProps<"SegmentedControl"> &
  SegmentedControlOptions

export const SegmentedControl = forwardRef<SegmentedControlProps, "div">(
  (props, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle(
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
      ...rest
    } = omitThemeProps(mergedProps)

    id ??= useId()
    name ??= `segmented-control-${useId()}`

    rest.onChange = useCallbackRef(rest.onChange)

    const descendants = useDescendants()

    const [focusedIndex, setFocusedIndex] = useState<number>(-1)
    const [isFocusVisible, setIsFocusVisible] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const labelRefs = useRef<Map<string | number, HTMLLabelElement>>(new Map())

    const [selectedValue, setSelectedValue] = useControllableState({
      value,
      defaultValue,
      onChange: rest.onChange,
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
        ...omitObject(rest, ["onChange"]),
        ...props,
        ref: mergeRefs(containerRef, ref),
        id,
        "aria-disabled": ariaAttr(isDisabled),
        "aria-readonly": ariaAttr(isReadOnly),
        onBlur: handlerAll(props.onBlur, onBlur),
      }),
      [id, isDisabled, isReadOnly, onBlur, rest],
    )

    const getInputProps: RequiredPropGetter<{ index: number }> = useCallback(
      ({ index, ...props } = {}, ref = null) => {
        const disabled = props.disabled ?? props.isDisabled ?? isDisabled
        const readOnly = props.readOnly ?? props.isReadOnly ?? isReadOnly
        const checked = props.value === selectedValue

        return {
          ...omitObject(props, ["isDisabled", "isReadOnly"]),
          ref,
          id: `${id}-${index}`,
          type: "radio",
          name,
          disabled: disabled || readOnly,
          readOnly,
          checked,
          "aria-disabled": ariaAttr(disabled),
          "aria-readonly": ariaAttr(readOnly),
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

    const getLabelProps: RequiredPropGetter<{ index: number }> = useCallback(
      ({ index, ...props } = {}, ref = null) => {
        const disabled = props.disabled ?? props.isDisabled ?? isDisabled
        const readOnly = props.readOnly ?? props.isReadOnly ?? isReadOnly
        const checked = props.value === selectedValue
        const focused = index === focusedIndex

        return {
          props,
          ref: mergeRefs(
            (node) => labelRefs.current.set(props.value, node),
            ref,
          ),
          "aria-disabled": ariaAttr(disabled),
          "aria-readonly": ariaAttr(readOnly),
          "data-checked": dataAttr(checked),
          "data-focus": dataAttr(focused),
          "data-focus-visible": dataAttr(focused && isFocusVisible),
          onFocus: handlerAll(props.onFocus, () =>
            onFocus(index, disabled || readOnly),
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
      position: "relative",
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

type SegmentedControlButtonOptions = {
  /**
   * The value of the segmented control button.
   */
  value: string | number
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * Props for motion component.
   */
  motionProps?: MotionProps
}

export type SegmentedControlButtonProps = Omit<
  HTMLUIProps<"label">,
  "onChange"
> &
  Pick<SegmentedControlProps, "isDisabled" | "isReadOnly"> &
  SegmentedControlButtonOptions

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
      onChange,
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
        {...getLabelProps(omitObject(props, ["onChange"]))}
        className={cx("ui-segmented-control__button", className)}
        __css={css}
        {...rest}
      >
        <ui.input {...getInputProps(props, mergeRefs(register, ref))} />
        <ui.span>{children}</ui.span>
        {isSelected && isMounted ? (
          <SegmentedControlCursor {...motionProps} />
        ) : null}
      </ui.label>
    )
  },
)

SegmentedControlButton.displayName = "SegmentedControlButton"

type SegmentedControlCursorProps = MotionProps & { className?: string }

const SegmentedControlCursor: FC<SegmentedControlCursorProps> = ({
  className,
  transition,
  ...rest
}) => {
  const { styles } = useSegmentedControl()

  const css: CSSUIObject = {
    position: "absolute",
    zIndex: "-10",
    w: "full",
    h: "full",
    ...styles.cursor,
  }

  return (
    <Motion
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
