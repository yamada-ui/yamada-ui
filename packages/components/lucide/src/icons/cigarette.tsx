import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cigarette as LucideCigaretteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CigaretteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CigaretteIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCigaretteIcon} {...props} />,
)

/**
 * @deprecated Use `CigaretteIcon` instead.
 */
export const Cigarette = CigaretteIcon
