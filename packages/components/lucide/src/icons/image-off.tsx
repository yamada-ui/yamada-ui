import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ImageOff as LucideImageOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ImageOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideImageOffIcon} {...props} />
))

/**
 * @deprecated Use `ImageOffIcon` instead.
 */
export const ImageOff = ImageOffIcon
