import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ListCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ListCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ListCheck} className={cx("ui-lucide-icon", className)} {...rest} />
)
