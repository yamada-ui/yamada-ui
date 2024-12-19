import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudHail } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudHailIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudHailIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CloudHail} className={cx("ui-lucide-icon", className)} {...rest} />
)
