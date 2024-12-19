import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Croissant } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CroissantIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CroissantIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Croissant} className={cx("ui-lucide-icon", className)} {...rest} />
)
