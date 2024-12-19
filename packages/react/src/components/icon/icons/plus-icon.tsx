import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Plus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Plus} className={cx("ui-lucide-icon", className)} {...rest} />
)
