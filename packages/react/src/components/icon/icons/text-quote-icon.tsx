import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TextQuote } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TextQuoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextQuoteIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={TextQuote} className={cx("ui-lucide-icon", className)} {...rest} />
)
