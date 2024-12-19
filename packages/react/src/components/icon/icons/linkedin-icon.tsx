import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Linkedin } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LinkedinIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LinkedinIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Linkedin} className={cx("ui-lucide-icon", className)} {...rest} />
)
