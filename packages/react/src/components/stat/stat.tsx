import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { StatStyle } from "./stat.style"
import { createSlotComponent, styled } from "../../core"
import { findChild, getValidChildren, isEmpty, omitChildren } from "../../utils"
import { TriangleIcon } from "../icon"
import { statStyle } from "./stat.style"

export interface StatRootProps
  extends HTMLStyledProps<"dl">,
    ThemeProps<StatStyle> {
  /**
   * If `true`, container will center its children regardless of their width.
   *
   * @default false
   */
  centerContent?: boolean
  /**
   * The stat helper message to use.
   */
  helperMessage?: ReactNode
  /**
   * The stat icon to use.
   */
  icon?: StatIconProps["type"]
  /**
   * The stat label to use.
   */
  label?: ReactNode
  /**
   * The stat value to use.
   */
  value?: ReactNode
  /**
   * Props for stat helper message component.
   */
  helperMessageProps?: StatHelperMessageProps
  /**
   * Props for stat icon component.
   */
  iconProps?: Omit<StatIconProps, "type">
  /**
   * Props for stat label component.
   */
  labelProps?: StatLabelProps
  /**
   * Props for stat value component.
   */
  valueProps?: StatValueProps
}

export const {
  PropsContext: StatPropsContext,
  usePropsContext: useStatPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<StatRootProps, StatStyle>("stat", statStyle)

/**
 * `Stat` is used to show numbers and data in a box.
 *
 * @see https://yamada-ui.com/components/stat
 */
export const StatRoot = withProvider<"dl", StatRootProps>(
  ({
    children,
    helperMessage,
    icon,
    label,
    value,
    helperMessageProps,
    iconProps,
    labelProps,
    valueProps,
    ...rest
  }) => {
    const validChildren = getValidChildren(children)
    const customStatLabel = findChild(validChildren, StatLabel)
    const customStatValue = findChild(validChildren, StatValue)
    const customStatHelperMessage = findChild(validChildren, StatHelperMessage)
    const cloneChildren = !isEmpty(validChildren)
      ? omitChildren(validChildren, StatLabel, StatValue, StatHelperMessage)
      : children

    return (
      <styled.dl {...rest}>
        {customStatLabel ?? <StatLabel {...labelProps}>{label}</StatLabel>}
        {customStatValue ?? <StatValue {...valueProps}>{value}</StatValue>}
        {customStatHelperMessage ?? (
          <StatHelperMessage {...helperMessageProps}>
            {icon ? <StatIcon type={icon} {...iconProps} /> : null}
            {helperMessage}
          </StatHelperMessage>
        )}
        {cloneChildren}
      </styled.dl>
    )
  },
  "root",
)()

export interface StatIconProps extends HTMLStyledProps<"svg"> {
  /**
   * @default "increase"
   */
  type?: "decrease" | "increase"
}

export const StatIcon = withContext<"svg", StatIconProps>(
  ({ type = "increase", ...rest }) => {
    return (
      <TriangleIcon
        aria-label={type === "increase" ? "Increased by" : "Decreased by"}
        data-type={type}
        {...rest}
      />
    )
  },
  "icon",
)()

export interface StatLabelProps extends HTMLStyledProps<"dt"> {}

export const StatLabel = withContext<"dt", StatLabelProps>("dt", "label")()

export interface StatValueProps extends HTMLStyledProps<"dd"> {}

export const StatValue = withContext<"dd", StatValueProps>("dd", "value")()

export interface StatUnitProps extends HTMLStyledProps<"span"> {}

export const StatUnit = withContext<"span", StatUnitProps>("span", "unit")()

export interface StatHelperMessageProps extends HTMLStyledProps<"dd"> {}

export const StatHelperMessage = withContext<"dd", StatHelperMessageProps>(
  "dd",
  "helperMessage",
)()
