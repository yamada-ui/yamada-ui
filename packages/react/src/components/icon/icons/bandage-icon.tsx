import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bandage } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BandageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BandageIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bandage} className={cx("ui-lucide-icon", className)} {...rest} />
)
