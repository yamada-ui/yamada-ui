import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SeparatorHorizontal as LucideSeparatorHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SeparatorHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SeparatorHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSeparatorHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SeparatorHorizontalIcon` instead.
 */
export const SeparatorHorizontal = SeparatorHorizontalIcon
