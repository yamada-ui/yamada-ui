import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ImageOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ImageOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ImageOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
