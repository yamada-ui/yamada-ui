import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileBadge as LucideFileBadgeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileBadgeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileBadgeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileBadgeIcon} {...props} />,
)

/**
 * @deprecated Use `FileBadgeIcon` instead.
 */
export const FileBadge = FileBadgeIcon
