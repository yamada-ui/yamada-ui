import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HeartHandshake as LucideHeartHandshakeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HeartHandshakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartHandshakeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideHeartHandshakeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `HeartHandshakeIcon` instead.
 */
export const HeartHandshake = HeartHandshakeIcon
