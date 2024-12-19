import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalDistributeCenter } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignVerticalDistributeCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalDistributeCenterIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignVerticalDistributeCenter}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
