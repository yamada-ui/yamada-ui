import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MailCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MailCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MailCheck} className={cx("ui-lucide-icon", className)} {...rest} />
)
