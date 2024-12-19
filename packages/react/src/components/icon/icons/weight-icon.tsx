import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Weight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WeightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WeightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Weight} className={cx("ui-lucide-icon", className)} {...rest} />
)
