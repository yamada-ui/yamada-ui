import { forwardRef } from "@yamada-ui/core"
import { MoveVertical as MoveVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoveVerticalProps = LucideIconProps

/**
 * `MoveVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveVertical = forwardRef<MoveVerticalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MoveVerticalIcon} {...props} />,
)
