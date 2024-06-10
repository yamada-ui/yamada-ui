import { forwardRef } from "@yamada-ui/core"
import { FileMusic as FileMusicIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileMusicProps = LucideIconProps

/**
 * `FileMusic` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileMusic = forwardRef<FileMusicProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileMusicIcon} {...props} />
))
