import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UtilityPole as UtilityPoleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UtilityPole` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UtilityPole = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UtilityPoleIcon} {...props} />
))
