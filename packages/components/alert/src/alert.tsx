import type {
  AlertStatuses,
  AlertStatusValue,
  CSSUIObject,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import type { LoadingProps } from "@yamada-ui/loading"
import type { ComponentType } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
  useTheme,
} from "@yamada-ui/core"
import { Loading } from "@yamada-ui/loading"
import {
  CircleCheckBigIcon,
  InfoIcon,
  TriangleAlertIcon,
} from "@yamada-ui/lucide"
import { createContext, cx } from "@yamada-ui/utils"

const defaultStatuses = {
  error: { colorScheme: "danger", icon: TriangleAlertIcon },
  info: { colorScheme: "info", icon: InfoIcon },
  loading: { colorScheme: "primary", icon: Loading },
  success: { colorScheme: "success", icon: CircleCheckBigIcon },
  warning: { colorScheme: "warning", icon: TriangleAlertIcon },
} as const

interface AlertContext {
  status: AlertStatusValue
  styles: { [key: string]: CSSUIObject | undefined }
}

const [AlertProvider, useAlert] = createContext<AlertContext>({
  name: `AlertContext`,
  errorMessage: `useAlert returned is 'undefined'. Seems you forgot to wrap the components in "<Alert />" `,
})

export const getStatusColorScheme = (
  status: AlertStatusValue,
  statuses?: AlertStatuses,
): string =>
  statuses?.[status]?.colorScheme ?? defaultStatuses[status].colorScheme

export const getStatusIcon = (
  status: AlertStatusValue,
  statuses?: AlertStatuses,
): ComponentType<any> =>
  statuses?.[status]?.icon ?? defaultStatuses[status].icon

interface AlertOptions {
  /**
   * The status of the alert.
   *
   * @default 'info'
   */
  status?: AlertStatusValue
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
  variant = "oval",
  children,
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
