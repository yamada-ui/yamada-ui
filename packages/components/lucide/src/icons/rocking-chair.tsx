import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { RockingChair as OriginalRockingChair } from "lucide-react"

/**
 * `RockingChairIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RockingChairIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalRockingChair} {...props} />
))

/**
 * `RockingChair` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `RockingChairIcon` instead.
 */
export const RockingChair = RockingChairIcon
