import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Clover } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloverIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloverIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Clover} className={cx("ui-lucide-icon", className)} {...rest} />
)
