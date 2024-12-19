import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpNarrowWide } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowUpNarrowWideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpNarrowWideIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ArrowUpNarrowWide}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
