import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignStartVertical as LucideAlignStartVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignStartVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignStartVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAlignStartVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AlignStartVerticalIcon` instead.
 */
export const AlignStartVertical = AlignStartVerticalIcon
