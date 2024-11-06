import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RemoveFormatting as LucideRemoveFormattingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RemoveFormattingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RemoveFormattingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideRemoveFormattingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `RemoveFormattingIcon` instead.
 */
export const RemoveFormatting = RemoveFormattingIcon
