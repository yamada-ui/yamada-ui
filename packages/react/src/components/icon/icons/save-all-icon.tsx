import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SaveAll } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SaveAllIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SaveAllIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SaveAll} className={cx("ui-lucide-icon", className)} {...rest} />
)
