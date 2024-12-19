import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BetweenVerticalEnd } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BetweenVerticalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenVerticalEndIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={BetweenVerticalEnd}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
