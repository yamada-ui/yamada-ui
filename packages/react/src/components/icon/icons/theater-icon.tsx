import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Theater } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TheaterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TheaterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Theater} className={cx("ui-lucide-icon", className)} {...rest} />
)
