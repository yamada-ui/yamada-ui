import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FoldHorizontal as LucideFoldHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FoldHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FoldHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFoldHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FoldHorizontalIcon` instead.
 */
export const FoldHorizontal = FoldHorizontalIcon
