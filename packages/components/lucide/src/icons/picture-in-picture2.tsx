import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PictureInPicture2 as PictureInPicture2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PictureInPicture2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PictureInPicture2 = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={PictureInPicture2Icon} {...props} />
  ),
)
