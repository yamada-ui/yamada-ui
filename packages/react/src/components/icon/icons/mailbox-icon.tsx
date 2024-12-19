import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Mailbox } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MailboxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailboxIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Mailbox} className={cx("ui-lucide-icon", className)} {...rest} />
)
