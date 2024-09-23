import type {
  CSSUIObject,
  ComponentArgs,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
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
import type { ForwardedRef, ReactElement, RefAttributes } from "react"
import { useMemo } from "react"
import { useToggleGroup } from "./toggle-group"

interface ToggleOptions<Y extends string | number = string> {
  /**
   * The value of the toggle button.
   */
  value?: Y
  /**
   * If `true`, the toggle button will be selected.
   */
  isSelected?: boolean
  /**
    *If `true`, the toggle button will be initially selected.
   *
   @default false
   */
  defaultIsSelected?: boolean
  /**
   * The callback invoked when selected state changes.
   */
  onChange?: (isSelected: boolean) => void
  /**
   * The icon to be used in the button.
   */
  icon?: ReactElement
  /**
   * If true, the toggle button is full rounded. Else, it'll be slightly round.
   *
   * @default false
   */
  isRounded?: boolean
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
   * If `true`, disable ripple effects when pressing a element.
   *
   * @default false
   */
  disableRipple?: boolean
}

export interface ToggleProps<Y extends string | number = string>
  extends Omit<HTMLUIProps<"button">, "value" | "onChange">,
    ThemeProps<"Toggle">,
    ToggleOptions<Y> {}

/**
 * `Toggle` is a two-state button that can be either on or off.
 *
 * @see Docs https://yamada-ui.com/components/forms/toggle
 */
export const Toggle = forwardRef(
  <Y extends string | number = string>(
    props: ToggleProps<Y>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const {
      value: groupValue,
      onChange: onChangeGroup,
      isControlled,
      ...group
    } = useToggleGroup() ?? {}
    const [styles, mergedProps] = useComponentMultiStyle("Toggle", {
      ...group,
      ...props,
    })
    const {
      value,
      className,
      icon,
      isSelected: isSelectedProp,
      defaultIsSelected = false,
      onChange,
      isRounded,
      isActive,
      isDisabled = group?.isDisabled,
      isReadOnly = group?.isReadOnly,
      disableRipple,
      children,
      ...rest
    } = omitThemeProps(mergedProps)
    const [isSelected, setIsSelected] = useControllableState({
      value: isSelectedProp,
      defaultValue: defaultIsSelected,
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
        pointerEvents: isReadOnly ? "none" : "auto",
        ...styles,
        ...(isRounded ? { borderRadius: "fallback(full, 9999px)" } : {}),
      }),
      [isRounded, styles, isReadOnly],
    )

    return (
      <ui.button
        ref={ref}
        type="button"
        tabIndex={isReadOnly ? -1 : 0}
        disabled={isDisabled}
        data-active={dataAttr(isActive)}
        data-selected={dataAttr(trulySelected)}
        data-readonly={dataAttr(isReadOnly)}
        aria-pressed={trulySelected}
        className={cx("ui-toggle", className)}
        __css={css}
        {...rest}
        onClick={handlerAll(rest.onClick, onClick)}
        onPointerDown={onPointerDown}
      >
        {children || icon}

        <Ripple isDisabled={disableRipple || isDisabled} {...rippleProps} />
      </ui.button>
    )
  },
) as {
  <Y extends string | number = string>(
    props: ToggleProps<Y> & RefAttributes<HTMLButtonElement>,
  ): JSX.Element
} & ComponentArgs

Toggle.displayName = "Toggle"
