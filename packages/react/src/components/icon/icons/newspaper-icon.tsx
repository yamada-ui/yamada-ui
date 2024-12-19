import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Newspaper } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `NewspaperIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NewspaperIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Newspaper} className={cx("ui-lucide-icon", className)} {...rest} />
)
