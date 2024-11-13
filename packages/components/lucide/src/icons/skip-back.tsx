import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { SkipBack as OriginalSkipBack } from "lucide-react"

/**
 * `SkipBackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SkipBackIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalSkipBack}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `SkipBack` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SkipBackIcon` instead.
 */
export const SkipBack = SkipBackIcon
