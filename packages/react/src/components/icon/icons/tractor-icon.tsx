import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Tractor } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TractorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TractorIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Tractor} className={cx("ui-lucide-icon", className)} {...rest} />
)
