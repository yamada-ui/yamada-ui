import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { PencilLine as OriginalPencilLine } from "lucide-react"

/**
 * `PencilLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PencilLineIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalPencilLine}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `PencilLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PencilLineIcon` instead.
 */
export const PencilLine = PencilLineIcon
