import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Ampersands } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AmpersandsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AmpersandsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Ampersands} className={cx("ui-lucide-icon", className)} {...rest} />
)
