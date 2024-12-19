import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareScissors } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareScissorsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareScissorsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareScissors}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
