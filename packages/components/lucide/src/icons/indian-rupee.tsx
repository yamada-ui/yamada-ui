import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { IndianRupee as OriginalIndianRupee } from "lucide-react"

/**
 * `IndianRupeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndianRupeeIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalIndianRupee}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `IndianRupee` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `IndianRupeeIcon` instead.
 */
export const IndianRupee = IndianRupeeIcon
