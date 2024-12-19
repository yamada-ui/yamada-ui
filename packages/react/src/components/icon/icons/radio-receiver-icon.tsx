import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RadioReceiver } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RadioReceiverIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadioReceiverIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={RadioReceiver}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
