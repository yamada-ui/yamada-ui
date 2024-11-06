import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Link2Off as LucideLink2OffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Link2OffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Link2OffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLink2OffIcon} {...props} />
))

/**
 * @deprecated Use `Link2OffIcon` instead.
 */
export const Link2Off = Link2OffIcon
