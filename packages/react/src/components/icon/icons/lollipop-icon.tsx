import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Lollipop } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LollipopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LollipopIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Lollipop} className={cx("ui-lucide-icon", className)} {...rest} />
)
