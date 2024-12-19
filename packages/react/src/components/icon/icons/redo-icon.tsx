import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Redo } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RedoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RedoIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Redo} className={cx("ui-lucide-icon", className)} {...rest} />
)
