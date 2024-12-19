import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Luggage } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LuggageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LuggageIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Luggage} className={cx("ui-lucide-icon", className)} {...rest} />
)
