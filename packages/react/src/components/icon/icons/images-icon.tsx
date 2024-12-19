import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Images } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ImagesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImagesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Images} className={cx("ui-lucide-icon", className)} {...rest} />
)
