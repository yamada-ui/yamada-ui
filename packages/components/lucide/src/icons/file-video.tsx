import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileVideo as LucideFileVideoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileVideoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileVideoIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFileVideoIcon} {...props} />,
)

/**
 * @deprecated Use `FileVideoIcon` instead.
 */
export const FileVideo = FileVideoIcon
