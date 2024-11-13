import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { ChevronsLeftRightEllipsis as OriginalChevronsLeftRightEllipsis } from "lucide-react"

/**
 * `ChevronsLeftRightEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsLeftRightEllipsisIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalChevronsLeftRightEllipsis}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `ChevronsLeftRightEllipsis` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChevronsLeftRightEllipsisIcon` instead.
 */
export const ChevronsLeftRightEllipsis = ChevronsLeftRightEllipsisIcon
