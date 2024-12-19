import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cone } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ConeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ConeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cone} className={cx("ui-lucide-icon", className)} {...rest} />
)
