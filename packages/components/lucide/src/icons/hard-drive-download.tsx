import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HardDriveDownload as LucideHardDriveDownloadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HardDriveDownloadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HardDriveDownloadIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideHardDriveDownloadIcon} {...props} />
  ),
)

/**
 * @deprecated Use `HardDriveDownloadIcon` instead.
 */
export const HardDriveDownload = HardDriveDownloadIcon
