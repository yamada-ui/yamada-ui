import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Radiation } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RadiationIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadiationIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Radiation} className={cx("ui-lucide-icon", className)} {...rest} />
)
