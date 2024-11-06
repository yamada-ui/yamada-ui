import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ImageUp as LucideImageUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ImageUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageUpIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideImageUpIcon} {...props} />
))

/**
 * @deprecated Use `ImageUpIcon` instead.
 */
export const ImageUp = ImageUpIcon
