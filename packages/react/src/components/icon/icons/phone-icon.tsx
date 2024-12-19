import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Phone } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PhoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Phone} className={cx("ui-lucide-icon", className)} {...rest} />
)
