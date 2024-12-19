import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Citrus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CitrusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CitrusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Citrus} className={cx("ui-lucide-icon", className)} {...rest} />
)
