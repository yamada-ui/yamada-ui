import { forwardRef } from "@yamada-ui/core"
import { CircleChevronRight as CircleChevronRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleChevronRightProps = LucideIconProps

/**
 * `CircleChevronRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleChevronRight = forwardRef<CircleChevronRightProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={CircleChevronRightIcon} {...props} />
  ),
)
