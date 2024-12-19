import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Repeat } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RepeatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RepeatIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Repeat} className={cx("ui-lucide-icon", className)} {...rest} />
)
