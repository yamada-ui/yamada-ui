import { forwardRef } from "@yamada-ui/core"
import { MoveDown as MoveDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoveDownProps = LucideIconProps

/**
 * `MoveDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDown = forwardRef<MoveDownProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MoveDownIcon} {...props} />
))
