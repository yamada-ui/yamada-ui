import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ServerOff as LucideServerOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ServerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ServerOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideServerOffIcon} {...props} />,
)

/**
 * @deprecated Use `ServerOffIcon` instead.
 */
export const ServerOff = ServerOffIcon
