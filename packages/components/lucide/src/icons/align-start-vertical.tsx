import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { AlignStartVertical as OriginalAlignStartVertical } from "lucide-react"

/**
 * `AlignStartVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignStartVerticalIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalAlignStartVertical}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `AlignStartVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignStartVerticalIcon` instead.
 */
export const AlignStartVertical = AlignStartVerticalIcon
