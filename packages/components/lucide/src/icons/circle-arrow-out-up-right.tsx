import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleArrowOutUpRight as CircleArrowOutUpRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleArrowOutUpRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowOutUpRight = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={CircleArrowOutUpRightIcon} {...props} />
  ),
)
