import type { HTMLUIProps, ThemeProps } from "../../core"
import type { IconProps } from "../icon"
import type { Loading } from "../loading"
import type { StatusScheme } from "../status"
import type { AlertStyle } from "./alert.style"
import { useMemo } from "react"
import { createSlotComponent, ui } from "../../core"
import { CircleCheckBigIcon, InfoIcon, TriangleAlertIcon } from "../icon"
import { useLoadingComponent } from "../loading"
import { alertStyle } from "./alert.style"

const icons = {
  error: TriangleAlertIcon,
  info: InfoIcon,
  success: CircleCheckBigIcon,
  warning: TriangleAlertIcon,
} as const

interface AlertContext {
  status: StatusScheme
}

interface AlertRootOptions {
  /**
   * The status of the alert.
   *
   * @default 'info'
   */
  status?: StatusScheme
}

export interface AlertRootProps
  extends HTMLUIProps,
    ThemeProps<AlertStyle>,
    AlertRootOptions {}

export const {
  ComponentContext: AlertContext,
  PropsContext: AlertPropsContext,
  useClassNames,
  useComponentContext: useAlertContext,
  usePropsContext: useAlertPropsContext,
  useStyleContext,
  withContext,
  withProvider,
} = createSlotComponent<AlertRootProps, AlertStyle, AlertContext>(
  "alert",
  alertStyle,
)

/**
 * `Alert` is a component that conveys information to the user.
 *
 * @see Docs https://yamada-ui.com/components/feedback/alert
 */
export const AlertRoot = withProvider<"div", AlertRootProps>(
  ({ status, ...props }) => {
    const context = useMemo(() => ({ status: status! }), [status])

    return (
      <AlertContext value={context}>
        <ui.div role="alert" {...props} />
      </AlertContext>
    )
  },
  "root",
)(({ colorScheme, status = "info" }) => ({
  colorScheme: colorScheme ?? status,
  status,
}))

export interface AlertIconProps extends IconProps {}

export const AlertIcon = withContext<"svg", AlertIconProps>((props) => {
  const { status } = useAlertContext()
  const Icon = icons[status]

  return <Icon {...props} />
}, "icon")()

export interface AlertLoadingProps extends Loading.Props {
  /**
   * The loading scheme.
   *
   * @default 'oval'
   */
  loadingScheme?: Loading.Scheme
}

export const AlertLoading = withContext<"svg", AlertLoadingProps>(
  ({ loadingScheme = "oval", ...props }) => {
    const Component = useLoadingComponent(loadingScheme)

    return <Component {...props} />
  },
  ["icon", "loading"],
)()

export interface AlertTitleProps extends HTMLUIProps<"p"> {}

export const AlertTitle = withContext<"p", AlertTitleProps>("p", "title")()

export interface AlertDescriptionProps extends HTMLUIProps<"span"> {}

export const AlertDescription = withContext<"span", AlertDescriptionProps>(
  "span",
  "description",
)()
