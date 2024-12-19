import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ImageUpscale } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ImageUpscaleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ImageUpscaleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ImageUpscale}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
