import { forwardRef } from "@yamada-ui/core"
import { Volume as VolumeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type VolumeProps = LucideIconProps

/**
 * `Volume` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Volume = forwardRef<VolumeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VolumeIcon} {...props} />
))
