import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { IndentIncrease } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `IndentIncreaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndentIncreaseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={IndentIncrease}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
