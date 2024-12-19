import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CookingPot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CookingPotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CookingPotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CookingPot} className={cx("ui-lucide-icon", className)} {...rest} />
)
