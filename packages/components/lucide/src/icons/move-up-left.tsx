import { forwardRef } from "@yamada-ui/core"
import { MoveUpLeft as MoveUpLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoveUpLeftProps = LucideIconProps

/**
 * `MoveUpLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveUpLeft = forwardRef<MoveUpLeftProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MoveUpLeftIcon} {...props} />
))
