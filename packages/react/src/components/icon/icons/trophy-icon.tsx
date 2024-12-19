import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Trophy } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TrophyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrophyIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Trophy} className={cx("ui-lucide-icon", className)} {...rest} />
)
