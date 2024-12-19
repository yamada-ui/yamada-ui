import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BetweenHorizontalStart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BetweenHorizontalStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenHorizontalStartIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={BetweenHorizontalStart}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
