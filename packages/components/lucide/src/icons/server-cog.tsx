import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ServerCog as LucideServerCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ServerCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ServerCogIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideServerCogIcon} {...props} />,
)

/**
 * @deprecated Use `ServerCogIcon` instead.
 */
export const ServerCog = ServerCogIcon
