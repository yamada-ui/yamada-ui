import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { Grid2x2Plus as OriginalGrid2x2Plus } from "lucide-react"

/**
 * `Grid2x2PlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grid2x2PlusIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalGrid2x2Plus} {...props} />
))

/**
 * `Grid2x2Plus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `Grid2x2PlusIcon` instead.
 */
export const Grid2x2Plus = Grid2x2PlusIcon
