import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Facebook } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FacebookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FacebookIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Facebook} className={cx("ui-lucide-icon", className)} {...rest} />
)
