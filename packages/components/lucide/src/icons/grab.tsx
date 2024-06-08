import { forwardRef } from "@yamada-ui/core"
import { Grab as GrabIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GrabProps = LucideIconProps

/**
 * `Grab` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grab = forwardRef<GrabProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GrabIcon} {...props} />
))
