import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LayoutGrid as LucideLayoutGridIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LayoutGridIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutGridIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideLayoutGridIcon} {...props} />,
)

/**
 * @deprecated Use `LayoutGridIcon` instead.
 */
export const LayoutGrid = LayoutGridIcon
