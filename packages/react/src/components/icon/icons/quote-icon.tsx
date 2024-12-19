import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Quote } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `QuoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const QuoteIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Quote} className={cx("ui-lucide-icon", className)} {...rest} />
)
