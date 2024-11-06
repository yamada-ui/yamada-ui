import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LayoutList as LucideLayoutListIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LayoutListIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutListIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideLayoutListIcon} {...props} />,
)

/**
 * @deprecated Use `LayoutListIcon` instead.
 */
export const LayoutList = LayoutListIcon
