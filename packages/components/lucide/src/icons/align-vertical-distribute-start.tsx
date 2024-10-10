import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalDistributeStart as AlignVerticalDistributeStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignVerticalDistributeStart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalDistributeStart = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={AlignVerticalDistributeStartIcon} {...props} />
  ),
)
