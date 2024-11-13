import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { AlignVerticalSpaceBetween as OriginalAlignVerticalSpaceBetween } from "lucide-react"

/**
 * `AlignVerticalSpaceBetweenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalSpaceBetweenIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalAlignVerticalSpaceBetween}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `AlignVerticalSpaceBetween` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignVerticalSpaceBetweenIcon` instead.
 */
export const AlignVerticalSpaceBetween = AlignVerticalSpaceBetweenIcon
