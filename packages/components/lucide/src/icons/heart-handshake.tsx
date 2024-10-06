import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HeartHandshake as HeartHandshakeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HeartHandshake` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartHandshake = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={HeartHandshakeIcon} {...props} />,
)
