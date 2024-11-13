import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { VenetianMask as OriginalVenetianMask } from "lucide-react"

/**
 * `VenetianMaskIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VenetianMaskIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalVenetianMask}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `VenetianMask` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `VenetianMaskIcon` instead.
 */
export const VenetianMask = VenetianMaskIcon
