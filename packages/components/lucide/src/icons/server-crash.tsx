import { forwardRef } from "@yamada-ui/core"
import { ServerCrash as ServerCrashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ServerCrashProps = LucideIconProps

/**
 * `ServerCrash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ServerCrash = forwardRef<ServerCrashProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ServerCrashIcon} {...props} />
))
