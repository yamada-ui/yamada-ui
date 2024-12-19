import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Aperture } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ApertureIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ApertureIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Aperture} className={cx("ui-lucide-icon", className)} {...rest} />
)
