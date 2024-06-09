import { forwardRef } from "@yamada-ui/core"
import { Tags as TagsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TagsProps = LucideIconProps

/**
 * `Tags` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tags = forwardRef<TagsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TagsIcon} {...props} />
))
