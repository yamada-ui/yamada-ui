import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { ChevronDown as OriginalChevronDown } from "lucide-react"

/**
 * `ChevronDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronDownIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalChevronDown}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `ChevronDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChevronDownIcon` instead.
 */
export const ChevronDown = ChevronDownIcon
