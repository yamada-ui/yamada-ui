import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileWarning as LucideFileWarningIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileWarningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileWarningIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFileWarningIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FileWarningIcon` instead.
 */
export const FileWarning = FileWarningIcon
