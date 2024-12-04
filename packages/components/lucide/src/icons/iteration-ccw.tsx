import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { IterationCcw as OriginalIterationCcw } from "lucide-react"

/**
 * `IterationCcwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IterationCcwIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalIterationCcw}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `IterationCcw` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `IterationCcwIcon` instead.
 */
export const IterationCcw = IterationCcwIcon
