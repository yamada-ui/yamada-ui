import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PictureInPicture as PictureInPictureIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PictureInPicture` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PictureInPicture = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PictureInPictureIcon} {...props} />,
)
