import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Caravan } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CaravanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CaravanIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Caravan} className={cx("ui-lucide-icon", className)} {...rest} />
)
