import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Rat } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RatIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Rat} className={cx("ui-lucide-icon", className)} {...rest} />
)
