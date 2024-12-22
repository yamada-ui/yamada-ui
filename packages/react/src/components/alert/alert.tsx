import type {
  AlertStatusValue,
  CSSUIObject,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "../../core"
import type { LoadingProps } from "../loading"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { createContext, cx } from "../../utils"
import { CircleCheckBigIcon, InfoIcon, TriangleAlertIcon } from "../icon"
import { Loading } from "../loading"

const statuses = {
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

const [AlertContext, useAlertContext] = createContext<AlertContext>({
  name: `AlertContext`,
  errorMessage: `useAlertContext returned is 'undefined'. Seems you forgot to wrap the components in "<Alert />" `,
})

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
export const Alert: FC<AlertProps> = ({
  colorScheme,
  status = "info",
  ...props
}) => {
  colorScheme ??= statuses[status].colorScheme

  const [styles, mergedProps] = useComponentMultiStyle("Alert", {
    ...props,
    colorScheme,
  })
  const { className, children, ...rest } = omitThemeProps(mergedProps)

  return (
    <AlertContext value={{ status, styles }}>
      <ui.div
        className={cx("ui-alert", className)}
        role="alert"
        __css={{
          ...styles.container,
        }}
        {...rest}
      >
        {children}
      </ui.div>
    </AlertContext>
  )
}

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
  const { status, styles } = useAlertContext()
  const Icon = statuses[status].icon

  return (
    <ui.span
      className={cx("ui-alert__icon", className)}
      display="inherit"
      __css={{
        ...styles.icon,
        ...(status === "loading" ? styles.loading : {}),
      }}
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

AlertIcon.__ui__ = "AlertIcon"

export interface AlertTitleProps extends HTMLUIProps<"p"> {}

export const AlertTitle: FC<AlertTitleProps> = ({ className, ...rest }) => {
  const { styles } = useAlertContext()

  return (
    <ui.p
      className={cx("ui-alert__title", className)}
      __css={{
        ...styles.title,
      }}
      {...rest}
    />
  )
}

AlertTitle.__ui__ = "AlertTitle"

export interface AlertDescriptionProps extends HTMLUIProps<"span"> {}

export const AlertDescription: FC<AlertDescriptionProps> = ({
  className,
  ...rest
}) => {
  const { styles } = useAlertContext()

  return (
    <ui.span
      className={cx("ui-alert__desc", className)}
      __css={{
        ...styles.description,
      }}
      {...rest}
    />
  )
}

AlertDescription.__ui__ = "AlertDescription"
