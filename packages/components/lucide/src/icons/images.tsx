import { forwardRef } from "@yamada-ui/core"
import { Images as ImagesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ImagesProps = LucideIconProps

/**
 * `Images` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Images = forwardRef<ImagesProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ImagesIcon} {...props} />
))
