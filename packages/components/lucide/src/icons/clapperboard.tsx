import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clapperboard as LucideClapperboardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClapperboardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClapperboardIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideClapperboardIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ClapperboardIcon` instead.
 */
export const Clapperboard = ClapperboardIcon
