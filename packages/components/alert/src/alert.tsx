import type {
  HTMLUIProps,
  ThemeProps,
  CSSUIObject,
  AlertStatuses,
  FC,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
  useTheme,
} from "@yamada-ui/core"
import { InfoIcon, WarningIcon, CheckIcon } from "@yamada-ui/icon"
import type { LoadingProps } from "@yamada-ui/loading"
import { Loading } from "@yamada-ui/loading"
import { createContext, cx } from "@yamada-ui/utils"

const defaultStatuses = {
  info: { icon: InfoIcon, colorScheme: "info" },
  success: { icon: CheckIcon, colorScheme: "success" },
  warning: { icon: WarningIcon, colorScheme: "warning" },
  error: { icon: WarningIcon, colorScheme: "danger" },
  loading: { icon: Loading, colorScheme: "primary" },
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
  ({ status = "info", colorScheme, ...props }, ref) => {
    const { theme } = useTheme()
    const statuses = theme.__config?.alert?.statuses ?? {}

    colorScheme ??= getStatusColorScheme(status, statuses)

    const [styles, mergedProps] = useComponentMultiStyle("Alert", {
      ...props,
      colorScheme,
    })
    const { className, children, ...rest } = omitThemeProps(mergedProps)

    const css: CSSUIObject = {
      w: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
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
      display="inherit"
      className={cx("ui-alert__icon", className)}
      __css={css}
      {...rest}
    >
      {children || (
        <Icon
          {...(status === "loading"
            ? { variant, color: "currentcolor" }
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
