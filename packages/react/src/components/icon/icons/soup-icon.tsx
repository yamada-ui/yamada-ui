import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Soup } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SoupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SoupIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Soup} className={cx("ui-lucide-icon", className)} {...rest} />
)
