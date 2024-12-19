import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MailSearch } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MailSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailSearchIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MailSearch} className={cx("ui-lucide-icon", className)} {...rest} />
)
