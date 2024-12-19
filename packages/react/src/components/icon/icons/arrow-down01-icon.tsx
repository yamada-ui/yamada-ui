import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDown01 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowDown01Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDown01Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowDown01}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
