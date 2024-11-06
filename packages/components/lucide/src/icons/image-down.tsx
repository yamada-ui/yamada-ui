import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ImageDown as LucideImageDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ImageDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideImageDownIcon} {...props} />,
)

/**
 * @deprecated Use `ImageDownIcon` instead.
 */
export const ImageDown = ImageDownIcon
