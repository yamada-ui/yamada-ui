import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Server as LucideServerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ServerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ServerIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideServerIcon} {...props} />
))

/**
 * @deprecated Use `ServerIcon` instead.
 */
export const Server = ServerIcon
