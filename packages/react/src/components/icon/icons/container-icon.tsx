import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Container } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ContainerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ContainerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Container} className={cx("ui-lucide-icon", className)} {...rest} />
)
