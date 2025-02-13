import type { HTMLUIProps, ThemeProps } from "../../core"
import type { StatusStyle } from "./status.style"
import { createSlotComponent, ui } from "../../core"
import { statusStyle } from "./status.style"

export type StatusScheme = "error" | "info" | "success" | "warning"

export interface StatusProps extends HTMLUIProps, ThemeProps<StatusStyle> {
  /**
   * The type of the status
   *
   * @default 'info'
   * */
  value?: StatusScheme
  /**
   * The props for the status indicator component
   */
  indicatorProps?: HTMLUIProps
  /**
   * The props for the status label component
   */
  labelProps?: HTMLUIProps
}

export const {
  PropsContext: StatusPropsContext,
  usePropsContext: useStatusPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<StatusProps, StatusStyle>("status", statusStyle)

/**
 * `Status` is component that indicate the status of a process or state.
 *
 * @see Docs https://yamada-ui.com/components/data-display/status
 */
export const Status = withProvider<"div", StatusProps>(
  ({ children, indicatorProps, labelProps, ...rest }) => {
    return (
      <ui.div {...rest}>
        <StatusIndicator {...indicatorProps} />

        <StatusLabel {...labelProps}>{children}</StatusLabel>
      </ui.div>
    )
  },
  "root",
)(({ colorScheme, value = "info" }) => ({
  colorScheme: colorScheme ?? value,
  value,
}))

interface StatusIndicatorProps extends HTMLUIProps {}

const StatusIndicator = withContext<"div", StatusIndicatorProps>(
  "div",
  "indicator",
)()

interface StatusLabelProps extends HTMLUIProps<"p"> {}

const StatusLabel = withContext<"p", StatusLabelProps>("p", "label")()
