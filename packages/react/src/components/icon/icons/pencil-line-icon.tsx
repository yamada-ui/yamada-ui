import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PencilLine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PencilLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PencilLineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PencilLine} className={cx("ui-lucide-icon", className)} {...rest} />
)
