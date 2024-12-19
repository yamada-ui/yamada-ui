import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SwatchBook } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SwatchBookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SwatchBookIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SwatchBook} className={cx("ui-lucide-icon", className)} {...rest} />
)
