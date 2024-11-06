import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArchiveX as LucideArchiveXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArchiveXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArchiveXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideArchiveXIcon} {...props} />
))

/**
 * @deprecated Use `ArchiveXIcon` instead.
 */
export const ArchiveX = ArchiveXIcon
