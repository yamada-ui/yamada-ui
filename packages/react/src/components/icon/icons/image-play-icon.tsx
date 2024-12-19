import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ImagePlay } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ImagePlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImagePlayIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ImagePlay} className={cx("ui-lucide-icon", className)} {...rest} />
)
