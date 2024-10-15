import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { ReactNode } from "react"
import type { StatHelperMessageProps } from "./stat-helper-message"
import type { StatIconProps } from "./stat-icon"
import type { StatLabelProps } from "./stat-label"
import type { StatNumberProps } from "./stat-number"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import {
  cx,
  findChild,
  getValidChildren,
  isEmpty,
  omitChildren,
} from "@yamada-ui/utils"
import { StatProvider } from "./stat-context"
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
export const Stat = forwardRef<StatProps, "dl">((props, ref) => {
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

  const css: CSSUIObject = {
    alignItems: centerContent ? "center" : "flex-start",
    display: "flex",
    flexDirection: "column",
    ...styles.container,
  }

  const validChildren = getValidChildren(children)

  const customStatLabel = findChild(validChildren, StatLabel)
  const customStatNumber = findChild(validChildren, StatNumber)
  const customStatHelperMessage = findChild(validChildren, StatHelperMessage)

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
Stat.displayName = "Stat"
Stat.__ui__ = "Stat"
