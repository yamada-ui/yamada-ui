import { forwardRef } from "@yamada-ui/core"
import { MoveHorizontal as MoveHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoveHorizontalProps = LucideIconProps

/**
 * `MoveHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveHorizontal = forwardRef<MoveHorizontalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MoveHorizontalIcon} {...props} />,
)
