import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Volume as LucideVolumeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VolumeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VolumeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideVolumeIcon} {...props} />
))

/**
 * @deprecated Use `VolumeIcon` instead.
 */
export const Volume = VolumeIcon
