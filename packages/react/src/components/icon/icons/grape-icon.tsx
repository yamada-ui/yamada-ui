import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Grape } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GrapeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GrapeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Grape} className={cx("ui-lucide-icon", className)} {...rest} />
)
