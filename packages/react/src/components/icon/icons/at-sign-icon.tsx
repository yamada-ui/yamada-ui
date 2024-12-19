import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AtSign } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AtSignIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AtSignIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={AtSign} className={cx("ui-lucide-icon", className)} {...rest} />
)
