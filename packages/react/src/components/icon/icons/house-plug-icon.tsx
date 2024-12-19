import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HousePlug } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HousePlugIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HousePlugIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={HousePlug} className={cx("ui-lucide-icon", className)} {...rest} />
)
