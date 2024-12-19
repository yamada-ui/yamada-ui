import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Clock2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Clock2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Clock2} className={cx("ui-lucide-icon", className)} {...rest} />
)
