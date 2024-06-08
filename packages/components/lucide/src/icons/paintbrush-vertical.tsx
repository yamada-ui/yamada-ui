import { forwardRef } from "@yamada-ui/core"
import { PaintbrushVertical as PaintbrushVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PaintbrushVerticalProps = LucideIconProps

/**
 * `PaintbrushVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaintbrushVertical = forwardRef<PaintbrushVerticalProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={PaintbrushVerticalIcon} {...props} />
  ),
)
