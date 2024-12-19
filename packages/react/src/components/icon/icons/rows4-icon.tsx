import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Rows4 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Rows4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rows4Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Rows4} className={cx("ui-lucide-icon", className)} {...rest} />
)
