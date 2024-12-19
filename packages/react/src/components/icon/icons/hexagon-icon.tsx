import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Hexagon } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HexagonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HexagonIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Hexagon} className={cx("ui-lucide-icon", className)} {...rest} />
)
