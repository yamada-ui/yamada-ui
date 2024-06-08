import { forwardRef } from "@yamada-ui/core"
import { FileHeart as FileHeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileHeartProps = LucideIconProps

/**
 * `FileHeart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileHeart = forwardRef<FileHeartProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileHeartIcon} {...props} />
))
