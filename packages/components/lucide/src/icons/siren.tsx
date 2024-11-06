import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Siren as LucideSirenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SirenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SirenIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSirenIcon} {...props} />
))

/**
 * @deprecated Use `SirenIcon` instead.
 */
export const Siren = SirenIcon
