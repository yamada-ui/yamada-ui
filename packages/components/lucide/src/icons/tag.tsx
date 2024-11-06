import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tag as LucideTagIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TagIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TagIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTagIcon} {...props} />
))

/**
 * @deprecated Use `TagIcon` instead.
 */
export const Tag = TagIcon
