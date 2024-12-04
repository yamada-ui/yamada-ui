import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { WindArrowDown as OriginalWindArrowDown } from "lucide-react"

/**
 * `WindArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WindArrowDownIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalWindArrowDown}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `WindArrowDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `WindArrowDownIcon` instead.
 */
export const WindArrowDown = WindArrowDownIcon
