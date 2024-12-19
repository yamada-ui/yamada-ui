import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Radio } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RadioIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadioIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Radio} className={cx("ui-lucide-icon", className)} {...rest} />
)
