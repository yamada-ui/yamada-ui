import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ImageDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ImageDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ImageDown} className={cx("ui-lucide-icon", className)} {...rest} />
)
