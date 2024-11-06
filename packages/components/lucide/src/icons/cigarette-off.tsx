import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CigaretteOff as LucideCigaretteOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CigaretteOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CigaretteOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCigaretteOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CigaretteOffIcon` instead.
 */
export const CigaretteOff = CigaretteOffIcon
