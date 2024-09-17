import { forwardRef } from "@yamada-ui/core"
import { MoveDownRight as MoveDownRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `MoveDownRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDownRight = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MoveDownRightIcon} {...props} />,
)
