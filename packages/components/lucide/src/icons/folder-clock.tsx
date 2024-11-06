import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FolderClock as LucideFolderClockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FolderClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderClockIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFolderClockIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FolderClockIcon` instead.
 */
export const FolderClock = FolderClockIcon
