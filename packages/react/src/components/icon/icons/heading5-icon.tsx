import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Heading5 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Heading5Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading5Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Heading5} className={cx("ui-lucide-icon", className)} {...rest} />
)
