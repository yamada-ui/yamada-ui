import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePercent } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquarePercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePercentIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquarePercent}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
