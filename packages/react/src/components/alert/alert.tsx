"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { IconProps } from "../icon"
import type { Loading } from "../loading"
import type { StatusScheme } from "../status"
import type { AlertStyle } from "./alert.style"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import {
  CircleCheckBigIcon,
  InfoIcon,
  OctagonAlertIcon,
  TriangleAlertIcon,
} from "../icon"
import { useLoadingComponent } from "../loading"
import { alertStyle } from "./alert.style"

const icons = {
  error: OctagonAlertIcon,
  info: InfoIcon,
  success: CircleCheckBigIcon,
  warning: TriangleAlertIcon,
} as const

interface ComponentContext {
  status: StatusScheme
}

export interface AlertRootProps
  extends HTMLStyledProps,
    ThemeProps<AlertStyle> {
  /**
   * The status of the alert.
   *
   * @default 'info'
   */
  status?: StatusScheme
}

export const {
  ComponentContext,
  PropsContext: AlertPropsContext,
  useComponentContext,
  usePropsContext: useAlertPropsContext,
  useStyleContext,
  withContext,
  withProvider,
} = createSlotComponent<AlertRootProps, AlertStyle, ComponentContext>(
  "alert",
  alertStyle,
)

/**
 * `Alert` is a component that conveys information to the user.
 *
 * @see https://yamada-ui.com/components/alert
 */
export const AlertRoot = withProvider<"div", AlertRootProps>(
  ({ status, colorScheme = status, ...props }) => {
    const context = useMemo(() => ({ status: status! }), [status])

    return (
      <ComponentContext value={context}>
        <styled.div colorScheme={colorScheme} role="alert" {...props} />
      </ComponentContext>
    )
  },
  "root",
)({ status: "info" })

export interface AlertIconProps extends IconProps {}

export const AlertIcon = withContext<"svg", AlertIconProps>(
  ({ as, ...rest }) => {
    const { status } = useComponentContext()
    const Icon = as || icons[status]

    return <Icon {...rest} />
  },
  "icon",
)()

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

export interface AlertTitleProps extends HTMLStyledProps<"p"> {}

export const AlertTitle = withContext<"p", AlertTitleProps>("p", "title")()

export interface AlertDescriptionProps extends HTMLStyledProps<"span"> {}

export const AlertDescription = withContext<"span", AlertDescriptionProps>(
  "span",
  "description",
)()
