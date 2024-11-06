import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignJustify as LucideAlignJustifyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignJustifyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignJustifyIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAlignJustifyIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AlignJustifyIcon` instead.
 */
export const AlignJustify = AlignJustifyIcon
