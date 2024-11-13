import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { Baseline as OriginalBaseline } from "lucide-react"

/**
 * `BaselineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BaselineIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalBaseline}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `Baseline` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BaselineIcon` instead.
 */
export const Baseline = BaselineIcon
