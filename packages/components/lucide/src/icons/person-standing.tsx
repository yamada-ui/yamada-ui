import { forwardRef } from "@yamada-ui/core"
import { PersonStanding as PersonStandingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PersonStandingProps = LucideIconProps

/**
 * `PersonStanding` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PersonStanding = forwardRef<PersonStandingProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PersonStandingIcon} {...props} />,
)
