import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { FoldVertical as OriginalFoldVertical } from "lucide-react"

/**
 * `FoldVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FoldVerticalIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalFoldVertical}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `FoldVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FoldVerticalIcon` instead.
 */
export const FoldVertical = FoldVerticalIcon
