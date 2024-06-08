import { forwardRef } from "@yamada-ui/core"
import { CigaretteOff as CigaretteOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CigaretteOffProps = LucideIconProps

/**
 * `CigaretteOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CigaretteOff = forwardRef<CigaretteOffProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CigaretteOffIcon} {...props} />,
)
