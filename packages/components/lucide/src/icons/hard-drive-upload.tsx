import { forwardRef } from "@yamada-ui/core"
import { HardDriveUpload as HardDriveUploadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HardDriveUploadProps = LucideIconProps

/**
 * `HardDriveUpload` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HardDriveUpload = forwardRef<HardDriveUploadProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={HardDriveUploadIcon} {...props} />,
)
