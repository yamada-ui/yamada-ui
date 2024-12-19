import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Utensils } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UtensilsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UtensilsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Utensils} className={cx("ui-lucide-icon", className)} {...rest} />
)
