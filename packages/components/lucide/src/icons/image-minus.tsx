import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ImageMinus as LucideImageMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ImageMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideImageMinusIcon} {...props} />,
)

/**
 * @deprecated Use `ImageMinusIcon` instead.
 */
export const ImageMinus = ImageMinusIcon
