import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MailWarning } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MailWarningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailWarningIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MailWarning}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
