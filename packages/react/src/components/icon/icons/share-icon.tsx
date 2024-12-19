import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Share } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShareIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Share} className={cx("ui-lucide-icon", className)} {...rest} />
)
