import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { IndentIncrease as OriginalIndentIncrease } from "lucide-react"

/**
 * `IndentIncreaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndentIncreaseIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalIndentIncrease}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `IndentIncrease` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `IndentIncreaseIcon` instead.
 */
export const IndentIncrease = IndentIncreaseIcon
