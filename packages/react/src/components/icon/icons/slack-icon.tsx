import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Slack } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SlackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SlackIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Slack} className={cx("ui-lucide-icon", className)} {...rest} />
)
