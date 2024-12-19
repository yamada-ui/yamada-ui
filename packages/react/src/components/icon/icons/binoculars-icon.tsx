import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Binoculars } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BinocularsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BinocularsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Binoculars} className={cx("ui-lucide-icon", className)} {...rest} />
)
