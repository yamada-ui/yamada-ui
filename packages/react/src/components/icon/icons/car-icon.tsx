import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Car } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CarIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Car} className={cx("ui-lucide-icon", className)} {...rest} />
)
