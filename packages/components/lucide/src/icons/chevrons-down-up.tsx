import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChevronsDownUp as OriginalChevronsDownUp } from "lucide-react"

/**
 * `ChevronsDownUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsDownUpIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalChevronsDownUp} {...props} />
))

/**
 * `ChevronsDownUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChevronsDownUpIcon` instead.
 */
export const ChevronsDownUp = ChevronsDownUpIcon
