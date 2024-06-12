import { forwardRef } from "@yamada-ui/core"
import { LampWallUp as LampWallUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LampWallUpProps = LucideIconProps

/**
 * `LampWallUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampWallUp = forwardRef<LampWallUpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LampWallUpIcon} {...props} />
))
