import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Tornado } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TornadoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TornadoIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Tornado} className={cx("ui-lucide-icon", className)} {...rest} />
)
