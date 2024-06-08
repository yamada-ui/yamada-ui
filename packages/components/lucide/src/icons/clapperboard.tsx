import { forwardRef } from "@yamada-ui/core"
import { Clapperboard as ClapperboardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClapperboardProps = LucideIconProps

/**
 * `Clapperboard` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clapperboard = forwardRef<ClapperboardProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClapperboardIcon} {...props} />,
)
