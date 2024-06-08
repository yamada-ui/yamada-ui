import { forwardRef } from "@yamada-ui/core"
import { FileBadge as FileBadgeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileBadgeProps = LucideIconProps

/**
 * `FileBadge` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileBadge = forwardRef<FileBadgeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileBadgeIcon} {...props} />
))
