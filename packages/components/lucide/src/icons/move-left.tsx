import { forwardRef } from "@yamada-ui/core"
import { MoveLeft as MoveLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoveLeftProps = LucideIconProps

/**
 * `MoveLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveLeft = forwardRef<MoveLeftProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MoveLeftIcon} {...props} />
))
