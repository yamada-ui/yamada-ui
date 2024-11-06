import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Paintbrush as LucidePaintbrushIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PaintbrushIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaintbrushIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucidePaintbrushIcon} {...props} />,
)

/**
 * @deprecated Use `PaintbrushIcon` instead.
 */
export const Paintbrush = PaintbrushIcon
