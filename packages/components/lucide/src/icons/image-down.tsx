import { forwardRef } from "@yamada-ui/core"
import { ImageDown as ImageDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ImageDownProps = LucideIconProps

/**
 * `ImageDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageDown = forwardRef<ImageDownProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ImageDownIcon} {...props} />
))
