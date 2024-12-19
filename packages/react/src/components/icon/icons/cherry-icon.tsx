import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cherry } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CherryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CherryIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cherry} className={cx("ui-lucide-icon", className)} {...rest} />
)
