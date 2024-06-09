import { forwardRef } from "@yamada-ui/core"
import { PictureInPicture as PictureInPictureIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PictureInPictureProps = LucideIconProps

/**
 * `PictureInPicture` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PictureInPicture = forwardRef<PictureInPictureProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PictureInPictureIcon} {...props} />,
)
