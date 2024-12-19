import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { IdCard } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `IdCardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IdCardIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={IdCard} className={cx("ui-lucide-icon", className)} {...rest} />
)
