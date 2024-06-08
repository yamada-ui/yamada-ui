import { forwardRef } from "@yamada-ui/core"
import { Tag as TagIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TagProps = LucideIconProps

/**
 * `Tag` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tag = forwardRef<TagProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TagIcon} {...props} />
))
