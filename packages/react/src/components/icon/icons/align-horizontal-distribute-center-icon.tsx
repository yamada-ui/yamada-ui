import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalDistributeCenter } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignHorizontalDistributeCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalDistributeCenterIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignHorizontalDistributeCenter}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
