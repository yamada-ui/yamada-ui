import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Image as LucideImageIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ImageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideImageIcon} {...props} />
))

/**
 * @deprecated Use `ImageIcon` instead.
 */
export const Image = ImageIcon
