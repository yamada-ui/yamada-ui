import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { IceCreamBowl as OriginalIceCreamBowl } from "lucide-react"

/**
 * `IceCreamBowlIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IceCreamBowlIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalIceCreamBowl} {...props} />
))

/**
 * `IceCreamBowl` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `IceCreamBowlIcon` instead.
 */
export const IceCreamBowl = IceCreamBowlIcon
