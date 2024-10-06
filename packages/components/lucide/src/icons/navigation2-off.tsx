import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Navigation2Off as Navigation2OffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Navigation2Off` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Navigation2Off = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={Navigation2OffIcon} {...props} />,
)
