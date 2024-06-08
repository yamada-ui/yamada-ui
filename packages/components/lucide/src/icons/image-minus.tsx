import { forwardRef } from "@yamada-ui/core"
import { ImageMinus as ImageMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ImageMinusProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageMinus = forwardRef<ImageMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ImageMinusIcon} {...props} />
))
