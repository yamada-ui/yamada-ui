import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Tags } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TagsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TagsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Tags} className={cx("ui-lucide-icon", className)} {...rest} />
)
