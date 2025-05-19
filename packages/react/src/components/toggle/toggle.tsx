import type { ReactElement } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { ToggleStyle } from "./toggle.style"
import type { UseToggleProps } from "./use-toggle"
import { createSlotComponent, styled } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createContext, handlerAll, isArray, isUndefined } from "../../utils"
import { Ripple, useRipple } from "../ripple"
import { toggleStyle } from "./toggle.style"
import { useToggle } from "./use-toggle"

export interface ToggleProps<Y extends number | string = string>
  extends Omit<HTMLStyledProps<"button">, "onChange" | "value">,
    Omit<UseToggleProps, "onChange">,
    ThemeProps<ToggleStyle> {
  /**
   * If `true`, the toggle button will be initially selected.
   *
   * @default false
   */
  defaultSelected?: boolean
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
   * The value of the toggle button.
   */
  value?: Y
  /**
   * The callback invoked when selected state changes.
   */
  onChange?: (selected: boolean) => void
}

interface ToggleContext {
  controlled: boolean
  disabled?: boolean
  readOnly?: boolean
  value?: (number | string)[] | number | string
  onChange?: <M extends number | string = string>(value: M | undefined) => void
}

export const [ToggleContext, useToggleContext] = createContext<ToggleContext>({
  name: "ToggleContext",
  strict: false,
})

export const {
  component,
  PropsContext: TogglePropsContext,
  usePropsContext: useTogglePropsContext,
  withProvider,
  useRootComponentProps,
} = createSlotComponent<ToggleProps, ToggleStyle>("toggle", toggleStyle)

/**
 * `Toggle` is a two-state button that can be either on or off.
 *
 * @see https://yamada-ui.com/components/toggle
 */
export const Toggle = withProvider<"button", ToggleProps>(
  <Y extends number | string = string>({
    active,
    children,
    defaultSelected = false,
    disabled,
    disableRipple,
    icon,
    readOnly,
    selected: selectedProp,
    value,
    onChange,
    ...rest
  }: ToggleProps<Y>) => {
    const {
      controlled: controlled,
      disabled: groupDisabled,
      readOnly: groupReadOnly,
      value: groupValue,
      onChange: onChangeGroup,
    } = useToggleContext() ?? {}

    disabled ??= groupDisabled
    readOnly ??= groupReadOnly

    const [selected, setSelected] = useControllableState({
      defaultValue: defaultSelected,
      value: selectedProp,
      onChange,
    })

    if (controlled && isUndefined(value)) {
      console.warn(`Toggle: value is required. Please set the value.`)
    }

    const multi = isArray(groupValue)
    const included = multi
      ? groupValue.includes(value ?? "")
      : value === groupValue
    const trulySelected = controlled ? included : selected
    const { onClick: onClickProp, ...rippleProps } = useRipple({
      ...rest,
      disabled: disableRipple || disabled,
    })

    const { getToggleProps } = useToggle({
      active,
      disabled,
      readOnly,
      selected: trulySelected,
      ...rest,
    })

    const onClick = () => {
      setSelected((prev) => !prev)
      onChangeGroup?.(value)
    }

    return (
      <styled.button
        {...getToggleProps({
          onClick: handlerAll(rest.onClick, onClickProp, onClick),
        })}
      >
        {children || icon}

        <Ripple {...rippleProps} />
      </styled.button>
    )
  },
  "root",
)()
