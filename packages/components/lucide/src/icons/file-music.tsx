import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileMusic as LucideFileMusicIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileMusicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileMusicIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileMusicIcon} {...props} />,
)

/**
 * @deprecated Use `FileMusicIcon` instead.
 */
export const FileMusic = FileMusicIcon
