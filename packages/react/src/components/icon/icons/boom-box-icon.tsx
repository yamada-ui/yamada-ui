import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BoomBox } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BoomBoxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoomBoxIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BoomBox} className={cx("ui-lucide-icon", className)} {...rest} />
)
