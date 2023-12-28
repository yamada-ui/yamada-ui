import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import {
  createContext,
  cx,
  findChildren,
  getValidChildren,
  isEmpty,
  omitChildren,
} from "@yamada-ui/utils"
import type { ReactNode } from "react"
import {
  StatHelperMessage,
  type StatHelperMessageProps,
} from "./stat-helper-message"
import { StatIcon, type StatIconProps } from "./stat-icon"
import { StatLabel, type StatLabelProps } from "./stat-label"
import { StatNumber, type StatNumberProps } from "./stat-number"

type StatContext = Record<string, CSSUIObject>

export const [StatProvider, useStat] = createContext<StatContext>({
  name: "StatContext",
  errorMessage: `useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`,
})

type StatOptions = {
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

export type StatProps = HTMLUIProps<"dl"> & ThemeProps<"Stat"> & StatOptions

/**
 * `Stat` is used to show numbers and data in a box.
 *
 * @see Docs https://yamada-ui.com/components/data-display/stat
 */
export const Stat = forwardRef<StatProps, "dl">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Stat", props)
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
