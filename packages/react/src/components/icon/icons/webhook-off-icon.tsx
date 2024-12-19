import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { WebhookOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WebhookOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WebhookOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={WebhookOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
