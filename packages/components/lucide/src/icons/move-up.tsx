import { forwardRef } from "@yamada-ui/core"
import { MoveUp as MoveUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoveUpProps = LucideIconProps

/**
 * `MoveUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveUp = forwardRef<MoveUpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MoveUpIcon} {...props} />
))
