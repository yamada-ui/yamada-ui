import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { IndentDecrease } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `IndentDecreaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndentDecreaseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={IndentDecrease}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
