import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpWideNarrow } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowUpWideNarrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpWideNarrowIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ArrowUpWideNarrow}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
