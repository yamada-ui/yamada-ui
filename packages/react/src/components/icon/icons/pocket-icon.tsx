import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Pocket } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PocketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PocketIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Pocket} className={cx("ui-lucide-icon", className)} {...rest} />
)
