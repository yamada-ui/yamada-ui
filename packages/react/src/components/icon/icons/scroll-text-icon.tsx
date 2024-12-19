import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ScrollText } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScrollTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScrollTextIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ScrollText} className={cx("ui-lucide-icon", className)} {...rest} />
)
