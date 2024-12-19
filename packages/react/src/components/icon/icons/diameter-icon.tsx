import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Diameter } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DiameterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiameterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Diameter} className={cx("ui-lucide-icon", className)} {...rest} />
)
