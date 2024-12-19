import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MailMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MailMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MailMinus} className={cx("ui-lucide-icon", className)} {...rest} />
)
