import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clapperboard as ClapperboardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Clapperboard` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clapperboard = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ClapperboardIcon} {...props} />
))
