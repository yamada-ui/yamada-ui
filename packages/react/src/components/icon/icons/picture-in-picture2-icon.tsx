import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PictureInPicture2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PictureInPicture2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PictureInPicture2Icon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={PictureInPicture2}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
