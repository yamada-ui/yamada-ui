import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileType2 as LucideFileType2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileType2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileType2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileType2Icon} {...props} />,
)

/**
 * @deprecated Use `FileType2Icon` instead.
 */
export const FileType2 = FileType2Icon
