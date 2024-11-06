import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Images as LucideImagesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ImagesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImagesIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideImagesIcon} {...props} />
))

/**
 * @deprecated Use `ImagesIcon` instead.
 */
export const Images = ImagesIcon
