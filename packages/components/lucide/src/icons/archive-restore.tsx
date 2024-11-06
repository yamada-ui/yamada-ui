import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArchiveRestore as LucideArchiveRestoreIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArchiveRestoreIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArchiveRestoreIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArchiveRestoreIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArchiveRestoreIcon` instead.
 */
export const ArchiveRestore = ArchiveRestoreIcon
