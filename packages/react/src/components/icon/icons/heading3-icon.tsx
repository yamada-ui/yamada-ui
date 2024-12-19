import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Heading3 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Heading3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading3Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Heading3} className={cx("ui-lucide-icon", className)} {...rest} />
)
