import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BeerOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BeerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeerOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BeerOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
