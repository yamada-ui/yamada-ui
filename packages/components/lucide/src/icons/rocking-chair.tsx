import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { RockingChair as OriginalRockingChair } from "lucide-react"

/**
 * `RockingChairIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RockingChairIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalRockingChair}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `RockingChair` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `RockingChairIcon` instead.
 */
export const RockingChair = RockingChairIcon
