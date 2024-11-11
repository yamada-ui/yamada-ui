import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { Tally5 as OriginalTally5 } from "lucide-react"

/**
 * `Tally5Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally5Icon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalTally5} {...props} />
))

/**
 * `Tally5` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `Tally5Icon` instead.
 */
export const Tally5 = Tally5Icon
