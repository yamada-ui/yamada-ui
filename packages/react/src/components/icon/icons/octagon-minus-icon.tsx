import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { OctagonMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `OctagonMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={OctagonMinus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
