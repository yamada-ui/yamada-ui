import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Crop } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CropIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CropIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Crop} className={cx("ui-lucide-icon", className)} {...rest} />
)
