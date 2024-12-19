import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UndoDot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UndoDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UndoDotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={UndoDot} className={cx("ui-lucide-icon", className)} {...rest} />
)
