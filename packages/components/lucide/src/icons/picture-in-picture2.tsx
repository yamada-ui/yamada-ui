import { forwardRef } from "@yamada-ui/core"
import { PictureInPicture2 as PictureInPicture2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PictureInPicture2Props = LucideIconProps

/**
 * `PictureInPicture2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PictureInPicture2 = forwardRef<PictureInPicture2Props, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={PictureInPicture2Icon} {...props} />
  ),
)
