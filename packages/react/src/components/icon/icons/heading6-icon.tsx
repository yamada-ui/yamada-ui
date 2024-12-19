import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Heading6 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Heading6Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading6Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Heading6} className={cx("ui-lucide-icon", className)} {...rest} />
)
