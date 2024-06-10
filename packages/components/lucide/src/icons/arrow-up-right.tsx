import { forwardRef } from "@yamada-ui/core"
import { ArrowUpRight as ArrowUpRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowUpRightProps = LucideIconProps

/**
 * `ArrowUpRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpRight = forwardRef<ArrowUpRightProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowUpRightIcon} {...props} />,
)
