import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Heading4 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Heading4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading4Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Heading4} className={cx("ui-lucide-icon", className)} {...rest} />
)
