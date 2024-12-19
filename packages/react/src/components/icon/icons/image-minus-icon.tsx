import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ImageMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ImageMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ImageMinus} className={cx("ui-lucide-icon", className)} {...rest} />
)
