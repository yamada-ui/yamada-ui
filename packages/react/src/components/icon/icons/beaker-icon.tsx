import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Beaker } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BeakerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeakerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Beaker} className={cx("ui-lucide-icon", className)} {...rest} />
)
