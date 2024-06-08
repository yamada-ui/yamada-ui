import { forwardRef } from "@yamada-ui/core"
import { CircleArrowUp as CircleArrowUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleArrowUpProps = LucideIconProps

/**
 * `CircleArrowUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowUp = forwardRef<CircleArrowUpProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleArrowUpIcon} {...props} />,
)
