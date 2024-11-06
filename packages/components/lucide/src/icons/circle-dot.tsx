import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleDot as LucideCircleDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleDotIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCircleDotIcon} {...props} />,
)

/**
 * @deprecated Use `CircleDotIcon` instead.
 */
export const CircleDot = CircleDotIcon
