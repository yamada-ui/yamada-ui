import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { FishSymbol as OriginalFishSymbol } from "lucide-react"

/**
 * `FishSymbolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FishSymbolIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalFishSymbol}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `FishSymbol` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FishSymbolIcon` instead.
 */
export const FishSymbol = FishSymbolIcon
