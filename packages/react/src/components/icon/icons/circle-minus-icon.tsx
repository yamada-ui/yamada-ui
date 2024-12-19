import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleMinus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
