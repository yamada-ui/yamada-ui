import type { ReactNode } from "react"
import type { FC, HTMLUIProps, ThemeProps } from "../../core"
import type { StatHelperMessageProps } from "./stat-helper-message"
import type { StatIconProps } from "./stat-icon"
import type { StatLabelProps } from "./stat-label"
import type { StatNumberProps } from "./stat-number"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import {
  cx,
  findChild,
  getValidChildren,
  isEmpty,
  omitChildren,
} from "../../utils"
import { StatContext } from "./stat-context"
import { StatHelperMessage } from "./stat-helper-message"
import { StatIcon } from "./stat-icon"
import { StatLabel } from "./stat-label"
import { StatNumber } from "./stat-number"

interface StatOptions {
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

export interface StatProps
  extends HTMLUIProps<"dl">,
    ThemeProps<"Stat">,
    StatOptions {}

/**
 * `Stat` is used to show numbers and data in a box.
 *
 * @see Docs https://yamada-ui.com/components/data-display/stat
 */
export const Stat: FC<StatProps> = (props) => {
  const [styles, mergedProps] = useComponentMultiStyle("Stat", props)
  const {
    className,
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
  } = omitThemeProps(mergedProps)

  const validChildren = getValidChildren(children)

  const customStatLabel = findChild(validChildren, StatLabel)
  const customStatNumber = findChild(validChildren, StatNumber)
  const customStatHelperMessage = findChild(validChildren, StatHelperMessage)

  const cloneChildren = !isEmpty(validChildren)
    ? omitChildren(validChildren, StatLabel, StatNumber, StatHelperMessage)
    : children

  return (
    <StatContext value={styles}>
      <ui.dl
        className={cx("ui-stat", className)}
        __css={{
          alignItems: centerContent ? "center" : "flex-start",
          ...styles.container,
        }}
        {...rest}
      >
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
    </StatContext>
  )
}

Stat.__ui__ = "Stat"
