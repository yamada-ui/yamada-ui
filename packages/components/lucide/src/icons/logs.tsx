import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Logs as LucideLogsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LogsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LogsIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLogsIcon} {...props} />
))

/**
 * @deprecated Use `LogsIcon` instead.
 */
export const Logs = LogsIcon
