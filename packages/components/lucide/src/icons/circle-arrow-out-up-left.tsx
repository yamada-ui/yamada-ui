import { forwardRef } from "@yamada-ui/core"
import { CircleArrowOutUpLeft as CircleArrowOutUpLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `CircleArrowOutUpLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowOutUpLeft = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={CircleArrowOutUpLeftIcon} {...props} />
  ),
)
