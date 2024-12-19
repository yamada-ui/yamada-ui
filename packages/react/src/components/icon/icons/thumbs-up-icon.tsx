import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ThumbsUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ThumbsUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThumbsUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ThumbsUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
