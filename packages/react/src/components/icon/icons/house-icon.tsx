import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { House } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HouseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={House} className={cx("ui-lucide-icon", className)} {...rest} />
)
