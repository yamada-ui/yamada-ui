import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Recycle } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RecycleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RecycleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Recycle} className={cx("ui-lucide-icon", className)} {...rest} />
)
