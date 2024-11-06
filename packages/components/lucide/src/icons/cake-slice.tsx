import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CakeSlice as LucideCakeSliceIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CakeSliceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CakeSliceIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCakeSliceIcon} {...props} />,
)

/**
 * @deprecated Use `CakeSliceIcon` instead.
 */
export const CakeSlice = CakeSliceIcon
