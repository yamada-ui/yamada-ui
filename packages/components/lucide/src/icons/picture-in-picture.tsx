import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PictureInPicture as LucidePictureInPictureIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PictureInPictureIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PictureInPictureIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePictureInPictureIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PictureInPictureIcon` instead.
 */
export const PictureInPicture = PictureInPictureIcon
