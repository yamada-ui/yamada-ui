import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ListPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ListPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ListPlus} className={cx("ui-lucide-icon", className)} {...rest} />
)
