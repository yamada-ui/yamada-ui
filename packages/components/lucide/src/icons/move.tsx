import { forwardRef } from "@yamada-ui/core"
import { Move as MoveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoveProps = LucideIconProps

/**
 * `Move` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Move = forwardRef<MoveProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MoveIcon} {...props} />
))
