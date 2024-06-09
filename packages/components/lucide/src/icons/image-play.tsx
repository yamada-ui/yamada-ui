import { forwardRef } from "@yamada-ui/core"
import { ImagePlay as ImagePlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ImagePlayProps = LucideIconProps

/**
 * `ImagePlay` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImagePlay = forwardRef<ImagePlayProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ImagePlayIcon} {...props} />
))
