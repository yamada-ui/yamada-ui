import type {
  ComponentArgs,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import type { ForwardedRef, ReactElement, RefAttributes } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { Ripple, useRipple } from "@yamada-ui/ripple"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  cx,
  dataAttr,
  handlerAll,
  isArray,
  isUndefined,
} from "@yamada-ui/utils"
import { useMemo } from "react"
import { useToggleGroup } from "./toggle-group"

interface ToggleOptions<Y extends number | string = string> {
  /**
    *If `true`, the toggle button will be initially selected.
   *
   @default false
   */
  defaultIsSelected?: boolean
  /**
   * If `true`, disable ripple effects when pressing a element.
   *
   * @default false
   */
  disableRipple?: boolean
  /**
   * The icon to be used in the button.
   */
  icon?: ReactElement
  /**
   * If `true`, the toggle button is represented as active.
   *
   * @default false
   */
  isActive?: boolean
  /**
   * If `true`, the toggle button will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, the toggle button will be readonly.
   *
   * @default false
   */
  isReadOnly?: boolean
  /**
   * If true, the toggle button is full rounded. Else, it'll be slightly round.
   *
   * @default false
   */
  isRounded?: boolean
  /**
   * If `true`, the toggle button will be selected.
   */
  isSelected?: boolean
  /**
   * The value of the toggle button.
   */
  value?: Y
  /**
   * The callback invoked when selected state changes.
   */
  onChange?: (isSelected: boolean) => void
}

export interface ToggleProps<Y extends number | string = string>
  extends Omit<HTMLUIProps<"button">, "onChange" | "value">,
    ThemeProps<"Toggle">,
    ToggleOptions<Y> {}

/**
 * `Toggle` is a two-state button that can be either on or off.
 *
 * @see Docs https://yamada-ui.com/components/forms/toggle
 */
export const Toggle = forwardRef(
  <Y extends number | string = string>(
    props: ToggleProps<Y>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const {
      isControlled,
      isDisabled: groupIsDisabled,
      isReadOnly: groupIsReadOnly,
      value: groupValue,
      onChange: onChangeGroup,
      ...group
    } = useToggleGroup() ?? {}
    const [styles, mergedProps] = useComponentMultiStyle("Toggle", {
      ...group,
      isDisabled: groupIsDisabled,
      isReadOnly: groupIsReadOnly,
      ...props,
    })
    const {
      className,
      children,
      defaultIsSelected = false,
      disableRipple,
      icon,
      isActive,
      isDisabled = groupIsDisabled,
      isReadOnly = groupIsReadOnly,
      isRounded,
      isSelected: isSelectedProp,
      value,
      onChange,
      ...rest
    } = omitThemeProps(mergedProps)
    const [isSelected, setIsSelected] = useControllableState({
      defaultValue: defaultIsSelected,
      value: isSelectedProp,
      onChange,
    })

    if (isControlled && isUndefined(value)) {
      console.warn(`Toggle: value is required. Please set the value.`)
    }

    const isMulti = isArray(groupValue)
    const isIncluded = isMulti
      ? groupValue.includes(value ?? "")
      : value === groupValue
    const trulySelected = isControlled ? isIncluded : isSelected
    const { onPointerDown, ...rippleProps } = useRipple({
      ...rest,
      isDisabled: disableRipple || isDisabled,
    })

    const onClick = () => {
      setIsSelected((prev) => !prev)
      onChangeGroup?.(value)
    }

    const css: CSSUIObject = useMemo(
      () => ({
        alignItems: "center",
        appearance: "none",
        display: "inline-flex",
        gap: "fallback(2, 0.5rem)",
        justifyContent: "center",
        outline: "none",
        overflow: "hidden",
        pointerEvents: isReadOnly ? "none" : "auto",
        position: "relative",
        userSelect: "none",
        verticalAlign: "middle",
        ...styles,
        ...(isRounded ? { borderRadius: "fallback(full, 9999px)" } : {}),
      }),
      [isRounded, styles, isReadOnly],
    )

    return (
      <ui.button
        ref={ref}
        type="button"
        className={cx("ui-toggle", className)}
        aria-pressed={trulySelected}
        data-active={dataAttr(isActive)}
        data-readonly={dataAttr(isReadOnly)}
        data-selected={dataAttr(trulySelected)}
        disabled={isDisabled}
        tabIndex={isReadOnly ? -1 : 0}
        __css={css}
        {...rest}
        onClick={handlerAll(rest.onClick, onClick)}
        onPointerDown={onPointerDown}
      >
        {children || icon}

        <Ripple {...rippleProps} />
      </ui.button>
    )
  },
) as {
  <Y extends number | string = string>(
    props: RefAttributes<HTMLButtonElement> & ToggleProps<Y>,
  ): ReactElement
} & ComponentArgs

Toggle.displayName = "Toggle"
Toggle.__ui__ = "Toggle"
