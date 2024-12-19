import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Smile } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SmileIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmileIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Smile} className={cx("ui-lucide-icon", className)} {...rest} />
)
