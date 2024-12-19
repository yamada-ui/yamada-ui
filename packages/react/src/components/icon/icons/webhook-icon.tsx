import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Webhook } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WebhookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WebhookIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Webhook} className={cx("ui-lucide-icon", className)} {...rest} />
)
