import { forwardRef } from "@yamada-ui/core"
import { ImageUp as ImageUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ImageUpProps = LucideIconProps

/**
 * `ImageUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageUp = forwardRef<ImageUpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ImageUpIcon} {...props} />
))
