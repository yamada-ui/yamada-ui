import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Scroll } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScrollIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScrollIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Scroll} className={cx("ui-lucide-icon", className)} {...rest} />
)
