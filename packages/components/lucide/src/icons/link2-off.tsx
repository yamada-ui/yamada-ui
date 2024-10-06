import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Link2Off as Link2OffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Link2Off` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Link2Off = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Link2OffIcon} {...props} />
))
