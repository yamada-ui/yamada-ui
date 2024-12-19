import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Hospital } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HospitalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HospitalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Hospital} className={cx("ui-lucide-icon", className)} {...rest} />
)
