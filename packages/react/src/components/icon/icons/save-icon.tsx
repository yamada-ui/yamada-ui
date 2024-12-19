import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Save } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SaveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SaveIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Save} className={cx("ui-lucide-icon", className)} {...rest} />
)
