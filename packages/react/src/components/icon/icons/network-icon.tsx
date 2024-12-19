import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Network } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `NetworkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NetworkIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Network} className={cx("ui-lucide-icon", className)} {...rest} />
)
