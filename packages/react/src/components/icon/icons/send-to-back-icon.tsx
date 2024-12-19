import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SendToBack } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SendToBackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SendToBackIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SendToBack} className={cx("ui-lucide-icon", className)} {...rest} />
)
