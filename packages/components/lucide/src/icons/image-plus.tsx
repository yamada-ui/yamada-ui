import { forwardRef } from "@yamada-ui/core"
import { ImagePlus as ImagePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ImagePlusProps = LucideIconProps

/**
 * `ImagePlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImagePlus = forwardRef<ImagePlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ImagePlusIcon} {...props} />
))
