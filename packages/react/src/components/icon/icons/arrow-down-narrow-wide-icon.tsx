import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownNarrowWide } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowDownNarrowWideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownNarrowWideIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ArrowDownNarrowWide}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
