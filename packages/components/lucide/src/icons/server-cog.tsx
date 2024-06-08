import { forwardRef } from "@yamada-ui/core"
import { ServerCog as ServerCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ServerCogProps = LucideIconProps

/**
 * `ServerCog` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ServerCog = forwardRef<ServerCogProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ServerCogIcon} {...props} />
))
