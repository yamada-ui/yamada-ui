import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Slash } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SlashIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Slash} className={cx("ui-lucide-icon", className)} {...rest} />
)
