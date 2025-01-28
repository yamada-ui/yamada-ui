import type { FC, HTMLUIProps, StatusValue, ThemeProps } from "../../core"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { cx } from "../../utils"

const statuses = {
  error: { colorScheme: "danger" },
  info: { colorScheme: "info" },
  success: { colorScheme: "success" },
  warning: { colorScheme: "warning" },
} as const

interface StatusOptions {
  /**
   * The type of the status
   *
   * @default 'info'
   * */
  value?: StatusValue
  /**
   * The props for the status indicator component
   */
  indicatorProps?: HTMLUIProps
  /**
   * The props for the status label component
   */
  labelProps?: HTMLUIProps
}

export interface StatusProps
  extends HTMLUIProps,
    ThemeProps<"Status">,
    StatusOptions {}

/**
 * `Status` is component that indicate the status of a process or state.
 *
 * @see Docs https://yamada-ui.com/components/data-display/status
 */
export const Status: FC<StatusProps> = ({
  colorScheme,
  value = "info",
  indicatorProps,
  labelProps,
  ...props
}) => {
  colorScheme ??= statuses[value].colorScheme

  const [styles, mergedProps] = useComponentMultiStyle("Status", {
    ...props,
    colorScheme,
  })
  const { className, children, ...rest } = omitThemeProps(mergedProps)

  return (
    <ui.div
      className={cx("ui-status", className)}
      __css={{ ...styles.container }}
      {...rest}
    >
      <ui.div
        className="ui-status__indicator"
        __css={{ ...styles.indicator }}
        {...indicatorProps}
      />

      <ui.p
        className="ui-status__label"
        __css={{ ...styles.label }}
        {...labelProps}
      >
        {children}
      </ui.p>
    </ui.div>
  )
}

Status.__ui__ = "Status"
