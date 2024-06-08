import { forwardRef } from "@yamada-ui/core"
import { Lamp as LampIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LampProps = LucideIconProps

/**
 * `Lamp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Lamp = forwardRef<LampProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LampIcon} {...props} />
))
