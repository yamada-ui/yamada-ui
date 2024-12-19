import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownWideNarrow } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowDownWideNarrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownWideNarrowIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ArrowDownWideNarrow}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
