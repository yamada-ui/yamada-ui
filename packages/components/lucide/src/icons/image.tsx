import { forwardRef } from "@yamada-ui/core"
import { Image as ImageIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ImageProps = LucideIconProps

/**
 * `Image` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Image = forwardRef<ImageProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ImageIcon} {...props} />
))
