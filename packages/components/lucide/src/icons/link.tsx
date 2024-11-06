import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Link as LucideLinkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LinkIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLinkIcon} {...props} />
))

/**
 * @deprecated Use `LinkIcon` instead.
 */
export const Link = LinkIcon
