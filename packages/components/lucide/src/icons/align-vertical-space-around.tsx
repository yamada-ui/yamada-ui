import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalSpaceAround as AlignVerticalSpaceAroundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignVerticalSpaceAround` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalSpaceAround = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={AlignVerticalSpaceAroundIcon} {...props} />
  ),
)
