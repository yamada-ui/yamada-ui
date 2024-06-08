import { forwardRef } from "@yamada-ui/core"
import { Crop as CropIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CropProps = LucideIconProps

/**
 * `Crop` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Crop = forwardRef<CropProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CropIcon} {...props} />
))
