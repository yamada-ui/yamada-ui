import { forwardRef } from "@yamada-ui/core"
import { SquareChevronUp as SquareChevronUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareChevronUpProps = LucideIconProps

/**
 * `SquareChevronUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareChevronUp = forwardRef<SquareChevronUpProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareChevronUpIcon} {...props} />,
)
