import { forwardRef } from "@yamada-ui/core"
import { Shovel as ShovelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShovelProps = LucideIconProps

/**
 * `Shovel` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Shovel = forwardRef<ShovelProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShovelIcon} {...props} />
))
