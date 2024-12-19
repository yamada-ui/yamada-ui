import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ZapOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ZapOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ZapOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ZapOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
