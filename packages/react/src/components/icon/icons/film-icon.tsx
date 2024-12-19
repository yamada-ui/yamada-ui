import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Film } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FilmIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilmIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Film} className={cx("ui-lucide-icon", className)} {...rest} />
)
