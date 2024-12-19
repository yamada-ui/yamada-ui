import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Lightbulb } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LightbulbIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LightbulbIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Lightbulb} className={cx("ui-lucide-icon", className)} {...rest} />
)
