import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Factory } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FactoryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FactoryIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Factory} className={cx("ui-lucide-icon", className)} {...rest} />
)
