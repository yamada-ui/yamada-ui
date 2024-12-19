import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Rss } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RssIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RssIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Rss} className={cx("ui-lucide-icon", className)} {...rest} />
)
