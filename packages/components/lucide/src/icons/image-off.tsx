import { forwardRef } from "@yamada-ui/core"
import { ImageOff as ImageOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ImageOffProps = LucideIconProps

/**
 * `ImageOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageOff = forwardRef<ImageOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ImageOffIcon} {...props} />
))
