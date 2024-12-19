import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Vote } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `VoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VoteIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Vote} className={cx("ui-lucide-icon", className)} {...rest} />
)
