import { forwardRef } from "@yamada-ui/core"
import { CircleDollarSign as CircleDollarSignIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleDollarSignProps = LucideIconProps

/**
 * `CircleDollarSign` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleDollarSign = forwardRef<CircleDollarSignProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleDollarSignIcon} {...props} />,
)
