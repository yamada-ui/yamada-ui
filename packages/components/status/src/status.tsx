import type {
  HTMLUIProps,
  Statuses,
  StatusValue,
  ThemeProps,
} from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
  useTheme,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

const defaultStatuses = {
  error: { colorScheme: "danger" },
  info: { colorScheme: "info" },
  success: { colorScheme: "success" },
  warning: { colorScheme: "warning" },
} as const satisfies Statuses

export const getStatusColorScheme = (
  status: StatusValue,
  statuses?: Statuses,
): string =>
  statuses?.[status]?.colorScheme ?? defaultStatuses[status].colorScheme

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
export const Status = forwardRef<StatusProps, "div">(
  (
    { colorScheme, value = "info", indicatorProps, labelProps, ...props },
    ref,
  ) => {
    const { theme } = useTheme()
    const statuses = theme.__config?.status?.statuses ?? {}

    colorScheme ??= getStatusColorScheme(value, statuses)

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
          ref={ref}
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
  },
)

Status.displayName = "Status"
Status.__ui__ = "Status"
