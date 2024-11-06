import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileSliders as LucideFileSlidersIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileSlidersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSlidersIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFileSlidersIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FileSlidersIcon` instead.
 */
export const FileSliders = FileSlidersIcon
