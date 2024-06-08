import { forwardRef } from "@yamada-ui/core"
import { BadgeDollarSign as BadgeDollarSignIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgeDollarSignProps = LucideIconProps

/**
 * `BadgeDollarSign` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeDollarSign = forwardRef<BadgeDollarSignProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BadgeDollarSignIcon} {...props} />,
)
