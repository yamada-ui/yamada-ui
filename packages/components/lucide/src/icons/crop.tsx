import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Crop as LucideCropIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CropIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CropIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCropIcon} {...props} />
))

/**
 * @deprecated Use `CropIcon` instead.
 */
export const Crop = CropIcon
