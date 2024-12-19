import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Baseline } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BaselineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BaselineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Baseline} className={cx("ui-lucide-icon", className)} {...rest} />
)
