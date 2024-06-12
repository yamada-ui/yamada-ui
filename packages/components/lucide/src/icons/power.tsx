import { forwardRef } from "@yamada-ui/core"
import { Power as PowerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PowerProps = LucideIconProps

/**
 * `Power` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Power = forwardRef<PowerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PowerIcon} {...props} />
))
