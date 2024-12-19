import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUp10 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowUp10Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUp10Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ArrowUp10} className={cx("ui-lucide-icon", className)} {...rest} />
)
