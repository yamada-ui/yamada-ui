import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MailPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MailPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MailPlus} className={cx("ui-lucide-icon", className)} {...rest} />
)
