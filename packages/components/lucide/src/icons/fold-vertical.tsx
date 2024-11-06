import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FoldVertical as LucideFoldVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FoldVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FoldVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFoldVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FoldVerticalIcon` instead.
 */
export const FoldVertical = FoldVerticalIcon
