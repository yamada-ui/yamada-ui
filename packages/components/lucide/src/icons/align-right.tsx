import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignRight as LucideAlignRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideAlignRightIcon} {...props} />,
)

/**
 * @deprecated Use `AlignRightIcon` instead.
 */
export const AlignRight = AlignRightIcon
