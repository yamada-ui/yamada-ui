import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BetweenVerticalStart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BetweenVerticalStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenVerticalStartIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={BetweenVerticalStart}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
