import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { FerrisWheel as OriginalFerrisWheel } from "lucide-react"

/**
 * `FerrisWheelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FerrisWheelIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalFerrisWheel} {...props} />
))

/**
 * `FerrisWheel` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FerrisWheelIcon` instead.
 */
export const FerrisWheel = FerrisWheelIcon
