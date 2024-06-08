import { forwardRef } from "@yamada-ui/core"
import { HardDriveDownload as HardDriveDownloadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HardDriveDownloadProps = LucideIconProps

/**
 * `HardDriveDownload` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HardDriveDownload = forwardRef<HardDriveDownloadProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={HardDriveDownloadIcon} {...props} />
  ),
)
