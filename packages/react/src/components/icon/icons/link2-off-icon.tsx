import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Link2Off } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Link2OffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Link2OffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Link2Off} className={cx("ui-lucide-icon", className)} {...rest} />
)
