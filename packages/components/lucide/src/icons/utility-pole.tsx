import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { UtilityPole as OriginalUtilityPole } from "lucide-react"

/**
 * `UtilityPoleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UtilityPoleIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalUtilityPole} {...props} />
))

/**
 * `UtilityPole` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `UtilityPoleIcon` instead.
 */
export const UtilityPole = UtilityPoleIcon
