import { forwardRef } from "@yamada-ui/core"
import { FileVolume2 as FileVolume2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileVolume2Props = LucideIconProps

/**
 * `FileVolume2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileVolume2 = forwardRef<FileVolume2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileVolume2Icon} {...props} />
))
