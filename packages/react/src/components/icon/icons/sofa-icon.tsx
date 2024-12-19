import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Sofa } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SofaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SofaIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Sofa} className={cx("ui-lucide-icon", className)} {...rest} />
)
