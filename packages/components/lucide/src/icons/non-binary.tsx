import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { NonBinary as OriginalNonBinary } from "lucide-react"

/**
 * `NonBinaryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NonBinaryIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalNonBinary}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `NonBinary` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `NonBinaryIcon` instead.
 */
export const NonBinary = NonBinaryIcon
