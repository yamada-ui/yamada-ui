"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { StatusStyle } from "./status.style"
import { createSlotComponent, styled } from "../../core"
import { statusStyle } from "./status.style"

export type StatusScheme = "error" | "info" | "success" | "warning"

export interface StatusProps extends HTMLStyledProps, ThemeProps<StatusStyle> {
  /**
   * The type of the status
   *
   * @default 'info'
   * */
  value?: StatusScheme
  /**
   * The props for the status indicator component
   */
  indicatorProps?: HTMLStyledProps
  /**
   * The props for the status label component
   */
  labelProps?: HTMLStyledProps
}

const {
  PropsContext: StatusPropsContext,
  usePropsContext: useStatusPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<StatusProps, StatusStyle>("status", statusStyle)

export { StatusPropsContext, useStatusPropsContext }

/**
 * `Status` is component that indicate the status of a process or state.
 *
 * @see https://yamada-ui.com/docs/components/status
 */
export const Status = withProvider<"div", StatusProps>(
  ({ children, indicatorProps, labelProps, ...rest }) => {
    return (
      <styled.div {...rest}>
        <StatusIndicator {...indicatorProps} />

        <StatusLabel {...labelProps}>{children}</StatusLabel>
      </styled.div>
    )
  },
  "root",
)(undefined, ({ colorScheme, value = "info", ...rest }) => ({
  colorScheme: colorScheme ?? value,
  ...rest,
}))

interface StatusIndicatorProps extends HTMLStyledProps {}

const StatusIndicator = withContext<"div", StatusIndicatorProps>(
  "div",
  "indicator",
)()

interface StatusLabelProps extends HTMLStyledProps<"p"> {}

const StatusLabel = withContext<"p", StatusLabelProps>("p", "label")()
