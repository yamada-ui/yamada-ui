import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Archive as LucideArchiveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArchiveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArchiveIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideArchiveIcon} {...props} />
))

/**
 * @deprecated Use `ArchiveIcon` instead.
 */
export const Archive = ArchiveIcon
