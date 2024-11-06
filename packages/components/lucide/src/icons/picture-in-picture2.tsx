import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PictureInPicture2 as LucidePictureInPicture2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PictureInPicture2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PictureInPicture2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePictureInPicture2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `PictureInPicture2Icon` instead.
 */
export const PictureInPicture2 = PictureInPicture2Icon
