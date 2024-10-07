import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShieldOff as ShieldOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShieldOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldOff = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShieldOffIcon} {...props} />
))
