import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ImageUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ImageUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ImageUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
