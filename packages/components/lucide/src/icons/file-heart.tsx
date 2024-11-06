import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileHeart as LucideFileHeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileHeartIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileHeartIcon} {...props} />,
)

/**
 * @deprecated Use `FileHeartIcon` instead.
 */
export const FileHeart = FileHeartIcon
