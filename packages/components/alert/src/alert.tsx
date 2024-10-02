import type {
  AlertStatuses,
  CSSUIObject,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import type { LoadingProps } from "@yamada-ui/loading"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
  useTheme,
} from "@yamada-ui/core"
import { CheckIcon, InfoIcon, WarningIcon } from "@yamada-ui/icon"
import { Loading } from "@yamada-ui/loading"
import { createContext, cx } from "@yamada-ui/utils"

const defaultStatuses = {
  error: { colorScheme: "danger", icon: WarningIcon },
  info: { colorScheme: "info", icon: InfoIcon },
  loading: { colorScheme: "primary", icon: Loading },
  success: { colorScheme: "success", icon: CheckIcon },
  warning: { colorScheme: "warning", icon: WarningIcon },
} as const

export type Status = keyof typeof defaultStatuses

interface AlertContext {
  status: Status
  styles: { [key: string]: CSSUIObject }
}

const [AlertProvider, useAlert] = createContext<AlertContext>({
  name: `AlertStylesContext`,
  errorMessage: `useAlert returned is 'undefined'. Seems you forgot to wrap the components in "<Alert />" `,
})

export const getStatusColorScheme = (
  status: Status,
  statuses?: AlertStatuses,
) => statuses?.[status]?.colorScheme ?? defaultStatuses[status].colorScheme

export const getStatusIcon = (status: Status, statuses?: AlertStatuses) =>
  statuses?.[status]?.icon ?? defaultStatuses[status].icon

interface AlertOptions {
  /**
   * The status of the alert.
   *
   * @default 'info'
   */
  status?: Status
}

export interface AlertProps
  extends HTMLUIProps,
    ThemeProps<"Alert">,
    AlertOptions {}

/**
 * `Alert` is a component that conveys information to the user.
 *
 * @see Docs https://yamada-ui.com/components/feedback/alert
 */
export const Alert = forwardRef<AlertProps, "div">(
  ({ colorScheme, status = "info", ...props }, ref) => {
    const { theme } = useTheme()
    const statuses = theme.__config?.alert?.statuses ?? {}

    colorScheme ??= getStatusColorScheme(status, statuses)

    const [styles, mergedProps] = useComponentMultiStyle("Alert", {
      ...props,
      colorScheme,
    })
    const { className, children, ...rest } = omitThemeProps(mergedProps)

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      overflow: "hidden",
      position: "relative",
      w: "100%",
      ...styles.container,
    }

    return (
      <AlertProvider value={{ status, styles }}>
        <ui.div
          ref={ref}
          className={cx("ui-alert", className)}
          role="alert"
          __css={css}
          {...rest}
        >
          {children}
        </ui.div>
      </AlertProvider>
    )
  },
)

Alert.displayName = "Alert"
Alert.__ui__ = "Alert"

export interface AlertIconProps extends HTMLUIProps<"span"> {
  variant?: LoadingProps["variant"]
}

export const AlertIcon: FC<AlertIconProps> = ({
  className,
  children,
  variant = "oval",
  ...rest
}) => {
  const { status, styles } = useAlert()
  const { theme } = useTheme()
  const statuses = theme.__config?.alert?.statuses ?? {}

  const Icon = getStatusIcon(status, statuses)
  const css: CSSUIObject = {
    ...styles.icon,
    ...(status === "loading" ? styles.loading : {}),
  }

  return (
    <ui.span
      className={cx("ui-alert__icon", className)}
      display="inherit"
      __css={css}
      {...rest}
    >
      {children || (
        <Icon
          {...(status === "loading"
            ? { color: "currentcolor", variant }
            : { boxSize: "100%" })}
        />
      )}
    </ui.span>
  )
}

AlertIcon.displayName = "AlertIcon"
AlertIcon.__ui__ = "AlertIcon"

export interface AlertTitleProps extends HTMLUIProps<"p"> {}

export const AlertTitle = forwardRef<AlertTitleProps, "p">(
  ({ className, ...rest }, ref) => {
    const { styles } = useAlert()

    const css: CSSUIObject = {
      display: "block",
      ...styles.title,
    }

    return (
      <ui.p
        ref={ref}
        className={cx("ui-alert__title", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

AlertTitle.displayName = "AlertTitle"
AlertTitle.__ui__ = "AlertTitle"

export interface AlertDescriptionProps extends HTMLUIProps<"span"> {}

export const AlertDescription = forwardRef<AlertDescriptionProps, "span">(
  ({ className, ...rest }, ref) => {
    const { styles } = useAlert()

    const css: CSSUIObject = {
      ...styles.description,
    }

    return (
      <ui.span
        ref={ref}
        className={cx("ui-alert__desc", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

AlertDescription.displayName = "AlertDescription"
AlertDescription.__ui__ = "AlertDescription"
