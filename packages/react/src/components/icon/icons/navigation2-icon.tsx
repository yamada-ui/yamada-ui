import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Navigation2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Navigation2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Navigation2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Navigation2}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
