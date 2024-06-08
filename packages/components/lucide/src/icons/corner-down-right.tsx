import { forwardRef } from "@yamada-ui/core"
import { CornerDownRight as CornerDownRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CornerDownRightProps = LucideIconProps

/**
 * `CornerDownRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerDownRight = forwardRef<CornerDownRightProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CornerDownRightIcon} {...props} />,
)
