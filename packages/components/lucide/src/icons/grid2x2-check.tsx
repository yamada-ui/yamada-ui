import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { Grid2x2Check as OriginalGrid2x2Check } from "lucide-react"

/**
 * `Grid2x2CheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grid2x2CheckIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalGrid2x2Check} {...props} />
))

/**
 * `Grid2x2Check` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `Grid2x2CheckIcon` instead.
 */
export const Grid2x2Check = Grid2x2CheckIcon
