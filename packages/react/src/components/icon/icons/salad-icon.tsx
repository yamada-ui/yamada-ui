import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Salad } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SaladIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SaladIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Salad} className={cx("ui-lucide-icon", className)} {...rest} />
)
