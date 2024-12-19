import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ImagePlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ImagePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImagePlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ImagePlus} className={cx("ui-lucide-icon", className)} {...rest} />
)
