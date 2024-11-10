import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { RollerCoaster as OriginalRollerCoaster } from "lucide-react"

/**
 * `RollerCoasterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RollerCoasterIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalRollerCoaster} {...props} />
))

/**
 * `RollerCoaster` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `RollerCoasterIcon` instead.
 */
export const RollerCoaster = RollerCoasterIcon
