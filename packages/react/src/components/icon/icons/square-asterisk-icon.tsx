import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareAsterisk } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareAsteriskIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareAsteriskIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareAsterisk}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
