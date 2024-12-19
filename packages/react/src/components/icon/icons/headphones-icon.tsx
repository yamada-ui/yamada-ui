import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Headphones } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HeadphonesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeadphonesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Headphones} className={cx("ui-lucide-icon", className)} {...rest} />
)
