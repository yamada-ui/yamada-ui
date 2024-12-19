import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bean } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BeanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeanIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bean} className={cx("ui-lucide-icon", className)} {...rest} />
)
