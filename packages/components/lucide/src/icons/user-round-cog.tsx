import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { UserRoundCog as OriginalUserRoundCog } from "lucide-react"

/**
 * `UserRoundCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundCogIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalUserRoundCog} {...props} />
))

/**
 * `UserRoundCog` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `UserRoundCogIcon` instead.
 */
export const UserRoundCog = UserRoundCogIcon
