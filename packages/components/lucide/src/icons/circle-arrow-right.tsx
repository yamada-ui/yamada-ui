import { forwardRef } from "@yamada-ui/core"
import { CircleArrowRight as CircleArrowRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleArrowRightProps = LucideIconProps

/**
 * `CircleArrowRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowRight = forwardRef<CircleArrowRightProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleArrowRightIcon} {...props} />,
)
