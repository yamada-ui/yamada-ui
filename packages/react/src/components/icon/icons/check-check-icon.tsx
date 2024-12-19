import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CheckCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CheckCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CheckCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CheckCheck} className={cx("ui-lucide-icon", className)} {...rest} />
)
