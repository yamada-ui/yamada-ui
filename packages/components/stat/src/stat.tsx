import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import {
  cx,
  findChildren,
  getValidChildren,
  isEmpty,
  omitChildren,
} from "@yamada-ui/utils"
import type { ReactNode } from "react"
import { StatProvider } from "./stat-context"
import { StatHelperMessage } from "./stat-helper-message"
import type { StatHelperMessageProps } from "./stat-helper-message"
import { StatIcon } from "./stat-icon"
import type { StatIconProps } from "./stat-icon"
import { StatLabel } from "./stat-label"
import type { StatLabelProps } from "./stat-label"
import { StatNumber } from "./stat-number"
import type { StatNumberProps } from "./stat-number"

interface StatOptions {
  /**
   * The stat label to use.
   */
  label?: ReactNode
  /**
   * Props for stat label component.
   */
  labelProps?: StatLabelProps
  /**
   * The stat number to use.
   */
  number?: ReactNode
  /**
   * Props for stat number component.
   */
  numberProps?: StatNumberProps
  /**
   * The stat icon to use.
   */
  icon?: StatIconProps["type"]
  /**
   * Props for stat icon component.
   */
  iconProps?: Omit<StatIconProps, "type">
  /**
   * The stat helper message to use.
   */
  helperMessage?: ReactNode
  /**
   * Props for stat helper message component.
   */
  helperMessageProps?: StatHelperMessageProps
  /**
   * If `true`, container will center its children regardless of their width.
   *
   * @default false
   */
  centerContent?: boolean
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
export const Stat = forwardRef<StatProps, "dl">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Stat", props)
  const {
    className,
    label,
    labelProps,
    number,
    numberProps,
    icon,
    iconProps,
    helperMessage,
    helperMessageProps,
    centerContent = false,
    children,
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    display: "flex",
    flexDirection: "column",
    alignItems: centerContent ? "center" : "flex-start",
    ...styles.container,
  }

  const validChildren = getValidChildren(children)

  const [customStatLabel] = findChildren(validChildren, StatLabel)
  const [customStatNumber] = findChildren(validChildren, StatNumber)
  const [customStatHelperMessage] = findChildren(
    validChildren,
    StatHelperMessage,
  )

  const cloneChildren = !isEmpty(validChildren)
    ? omitChildren(validChildren, StatLabel, StatNumber, StatHelperMessage)
    : children

  return (
    <StatProvider value={styles}>
      <ui.dl
        ref={ref}
        className={cx("ui-stat", className)}
        __css={css}
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
    </StatProvider>
  )
})
