import { forwardRef } from "@yamada-ui/core"
import { CircleArrowDown as CircleArrowDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleArrowDownProps = LucideIconProps

/**
 * `CircleArrowDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowDown = forwardRef<CircleArrowDownProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleArrowDownIcon} {...props} />,
)
