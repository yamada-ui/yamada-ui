import { forwardRef } from "@yamada-ui/core"
import { Cigarette as CigaretteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CigaretteProps = LucideIconProps

/**
 * `Cigarette` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cigarette = forwardRef<CigaretteProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CigaretteIcon} {...props} />
))
