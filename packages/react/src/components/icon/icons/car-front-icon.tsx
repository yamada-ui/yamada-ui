import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CarFront } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CarFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CarFrontIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CarFront} className={cx("ui-lucide-icon", className)} {...rest} />
)
