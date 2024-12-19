import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Squirrel } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquirrelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquirrelIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Squirrel} className={cx("ui-lucide-icon", className)} {...rest} />
)
