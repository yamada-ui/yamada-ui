import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { LaptopMinimalCheck as OriginalLaptopMinimalCheck } from "lucide-react"

/**
 * `LaptopMinimalCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LaptopMinimalCheckIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalLaptopMinimalCheck}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `LaptopMinimalCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `LaptopMinimalCheckIcon` instead.
 */
export const LaptopMinimalCheck = LaptopMinimalCheckIcon
