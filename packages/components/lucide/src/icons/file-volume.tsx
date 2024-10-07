import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileVolume as FileVolumeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileVolume` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileVolume = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileVolumeIcon} {...props} />
))
