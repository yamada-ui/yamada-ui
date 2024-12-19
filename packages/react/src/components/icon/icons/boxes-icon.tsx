import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Boxes } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BoxesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoxesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Boxes} className={cx("ui-lucide-icon", className)} {...rest} />
)
