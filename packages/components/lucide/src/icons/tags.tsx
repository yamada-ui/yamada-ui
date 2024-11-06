import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tags as LucideTagsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TagsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TagsIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTagsIcon} {...props} />
))

/**
 * @deprecated Use `TagsIcon` instead.
 */
export const Tags = TagsIcon
