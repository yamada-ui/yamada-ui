import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { LogOut as OriginalLogOut } from "lucide-react"

/**
 * `LogOutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LogOutIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalLogOut} {...props} />
))

/**
 * `LogOut` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `LogOutIcon` instead.
 */
export const LogOut = LogOutIcon
