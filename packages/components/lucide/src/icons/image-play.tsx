import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ImagePlay as LucideImagePlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ImagePlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImagePlayIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideImagePlayIcon} {...props} />,
)

/**
 * @deprecated Use `ImagePlayIcon` instead.
 */
export const ImagePlay = ImagePlayIcon
