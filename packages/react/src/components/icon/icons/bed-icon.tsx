import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bed} className={cx("ui-lucide-icon", className)} {...rest} />
)
