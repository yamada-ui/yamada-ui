import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Contact } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ContactIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ContactIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Contact} className={cx("ui-lucide-icon", className)} {...rest} />
)
