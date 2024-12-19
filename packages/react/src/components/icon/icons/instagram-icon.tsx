import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Instagram } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `InstagramIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const InstagramIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Instagram} className={cx("ui-lucide-icon", className)} {...rest} />
)
