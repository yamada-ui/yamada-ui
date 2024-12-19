import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Mails } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MailsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Mails} className={cx("ui-lucide-icon", className)} {...rest} />
)
