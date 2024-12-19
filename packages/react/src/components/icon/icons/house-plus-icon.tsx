import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HousePlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HousePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HousePlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={HousePlus} className={cx("ui-lucide-icon", className)} {...rest} />
)
