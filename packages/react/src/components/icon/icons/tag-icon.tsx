import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Tag } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TagIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TagIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Tag} className={cx("ui-lucide-icon", className)} {...rest} />
)
