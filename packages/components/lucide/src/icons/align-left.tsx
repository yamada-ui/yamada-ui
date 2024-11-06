import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignLeft as LucideAlignLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideAlignLeftIcon} {...props} />,
)

/**
 * @deprecated Use `AlignLeftIcon` instead.
 */
export const AlignLeft = AlignLeftIcon
