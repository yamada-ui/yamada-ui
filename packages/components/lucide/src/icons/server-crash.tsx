import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ServerCrash as LucideServerCrashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ServerCrashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ServerCrashIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideServerCrashIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ServerCrashIcon` instead.
 */
export const ServerCrash = ServerCrashIcon
