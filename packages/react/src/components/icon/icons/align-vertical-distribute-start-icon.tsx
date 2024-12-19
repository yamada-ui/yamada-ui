import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalDistributeStart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignVerticalDistributeStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalDistributeStartIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignVerticalDistributeStart}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
