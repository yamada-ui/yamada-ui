import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Beer } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BeerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Beer} className={cx("ui-lucide-icon", className)} {...rest} />
)
