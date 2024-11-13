import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { MousePointer2 as OriginalMousePointer2 } from "lucide-react"

/**
 * `MousePointer2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MousePointer2Icon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalMousePointer2}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `MousePointer2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MousePointer2Icon` instead.
 */
export const MousePointer2 = MousePointer2Icon
