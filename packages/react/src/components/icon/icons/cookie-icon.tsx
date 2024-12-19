import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cookie } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CookieIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CookieIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cookie} className={cx("ui-lucide-icon", className)} {...rest} />
)
