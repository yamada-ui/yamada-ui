import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalDistributeStart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignHorizontalDistributeStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalDistributeStartIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignHorizontalDistributeStart}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
