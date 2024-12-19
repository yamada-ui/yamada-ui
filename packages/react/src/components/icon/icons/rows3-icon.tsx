import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Rows3 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Rows3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rows3Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Rows3} className={cx("ui-lucide-icon", className)} {...rest} />
)
