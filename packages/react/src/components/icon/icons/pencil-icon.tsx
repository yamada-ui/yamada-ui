import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Pencil } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PencilIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PencilIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Pencil} className={cx("ui-lucide-icon", className)} {...rest} />
)
