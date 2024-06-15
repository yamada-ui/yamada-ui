import { forwardRef } from "@yamada-ui/core"
import { SquareChevronDown as SquareChevronDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareChevronDownProps = LucideIconProps

/**
 * `SquareChevronDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareChevronDown = forwardRef<SquareChevronDownProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={SquareChevronDownIcon} {...props} />
  ),
)
