import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HardDriveUpload as LucideHardDriveUploadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HardDriveUploadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HardDriveUploadIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideHardDriveUploadIcon} {...props} />
  ),
)

/**
 * @deprecated Use `HardDriveUploadIcon` instead.
 */
export const HardDriveUpload = HardDriveUploadIcon
