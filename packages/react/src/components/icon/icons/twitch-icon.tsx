import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Twitch } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TwitchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TwitchIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Twitch} className={cx("ui-lucide-icon", className)} {...rest} />
)
