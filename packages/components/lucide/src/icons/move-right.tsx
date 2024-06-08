import { forwardRef } from "@yamada-ui/core"
import { MoveRight as MoveRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoveRightProps = LucideIconProps

/**
 * `MoveRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveRight = forwardRef<MoveRightProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MoveRightIcon} {...props} />
))
