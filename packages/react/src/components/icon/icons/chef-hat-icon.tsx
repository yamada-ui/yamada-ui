import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChefHat } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChefHatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChefHatIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ChefHat} className={cx("ui-lucide-icon", className)} {...rest} />
)
