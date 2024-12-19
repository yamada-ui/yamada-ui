import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Annoyed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AnnoyedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AnnoyedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Annoyed} className={cx("ui-lucide-icon", className)} {...rest} />
)
