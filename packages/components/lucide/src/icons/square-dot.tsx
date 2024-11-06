import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareDot as LucideSquareDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDotIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSquareDotIcon} {...props} />,
)

/**
 * @deprecated Use `SquareDotIcon` instead.
 */
export const SquareDot = SquareDotIcon
