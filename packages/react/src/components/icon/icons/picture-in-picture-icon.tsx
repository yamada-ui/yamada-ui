import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PictureInPicture } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PictureInPictureIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PictureInPictureIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PictureInPicture}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
