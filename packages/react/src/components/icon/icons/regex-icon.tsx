import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Regex } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RegexIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RegexIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Regex} className={cx("ui-lucide-icon", className)} {...rest} />
)
