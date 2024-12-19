import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CableCar } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CableCarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CableCarIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CableCar} className={cx("ui-lucide-icon", className)} {...rest} />
)
