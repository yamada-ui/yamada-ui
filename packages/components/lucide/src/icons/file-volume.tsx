import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileVolume as LucideFileVolumeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileVolumeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileVolumeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileVolumeIcon} {...props} />,
)

/**
 * @deprecated Use `FileVolumeIcon` instead.
 */
export const FileVolume = FileVolumeIcon
