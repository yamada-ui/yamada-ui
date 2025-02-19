import type { ReactNode } from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import type { StatStyle } from "./stat.style"
import { createSlotComponent, ui } from "../../core"
import { findChild, getValidChildren, isEmpty, omitChildren } from "../../utils"
import { TriangleIcon } from "../icon"
import { statStyle } from "./stat.style"

export interface StatRootProps
  extends HTMLUIProps<"dl">,
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
   * The stat number to use.
   */
  number?: ReactNode
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
   * Props for stat number component.
   */
  numberProps?: StatNumberProps
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
 * @see Docs https://yamada-ui.com/components/data-display/stat
 */
export const StatRoot = withProvider<"dl", StatRootProps>(
  ({
    centerContent = false,
    children,
    helperMessage,
    icon,
    label,
    number,
    helperMessageProps,
    iconProps,
    labelProps,
    numberProps,
    ...rest
  }) => {
    const validChildren = getValidChildren(children)
    const customStatLabel = findChild(validChildren, StatLabel)
    const customStatNumber = findChild(validChildren, StatNumber)
    const customStatHelperMessage = findChild(validChildren, StatHelperMessage)
    const cloneChildren = !isEmpty(validChildren)
      ? omitChildren(validChildren, StatLabel, StatNumber, StatHelperMessage)
      : children

    return (
      <ui.dl alignItems={centerContent ? "center" : "flex-start"} {...rest}>
        {customStatLabel ?? <StatLabel {...labelProps}>{label}</StatLabel>}
        {customStatNumber ?? <StatNumber {...numberProps}>{number}</StatNumber>}
        {customStatHelperMessage ?? (
          <StatHelperMessage {...helperMessageProps}>
            {icon ? <StatIcon type={icon} {...iconProps} /> : null}
            {helperMessage}
          </StatHelperMessage>
        )}
        {cloneChildren}
      </ui.dl>
    )
  },
  "root",
)()

export interface StatIconProps extends HTMLUIProps<"svg"> {
  /**
   * @default "increase"
   */
  type?: "decrease" | "increase"
}

export const StatIcon = withContext<"svg", StatIconProps>(
  ({ type = "increase", ...rest }) => {
    const color = type === "increase" ? "{increase}" : "{decrease}"

    return (
      <TriangleIcon
        aria-label={type === "increase" ? "Increased by" : "Decreased by"}
        color={color}
        fill={color}
        transform={type === "decrease" ? "rotate(180deg)" : undefined}
        {...rest}
      />
    )
  },
  "icon",
)()

export interface StatLabelProps extends HTMLUIProps<"dt"> {}

export const StatLabel = withContext<"dt", StatLabelProps>("dt", "label")()

export interface StatNumberProps extends HTMLUIProps<"dd"> {}

export const StatNumber = withContext<"dd", StatNumberProps>("dd", "number")()

export interface StatHelperMessageProps extends HTMLUIProps<"dd"> {}

export const StatHelperMessage = withContext<"dd", StatNumberProps>(
  "dd",
  "helperMessage",
)()
