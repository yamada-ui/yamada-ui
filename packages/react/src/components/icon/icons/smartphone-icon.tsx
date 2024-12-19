import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Smartphone } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SmartphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmartphoneIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Smartphone} className={cx("ui-lucide-icon", className)} {...rest} />
)
