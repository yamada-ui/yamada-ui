import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Chrome } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChromeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChromeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Chrome} className={cx("ui-lucide-icon", className)} {...rest} />
)