import { forwardRef } from "@yamada-ui/core"
import { MoveUpRight as MoveUpRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoveUpRightProps = LucideIconProps

/**
 * `MoveUpRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveUpRight = forwardRef<MoveUpRightProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MoveUpRightIcon} {...props} />
))
