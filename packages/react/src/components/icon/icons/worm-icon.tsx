import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Worm } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WormIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WormIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Worm} className={cx("ui-lucide-icon", className)} {...rest} />
)
