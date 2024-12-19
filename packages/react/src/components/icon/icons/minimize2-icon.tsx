import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Minimize2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Minimize2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Minimize2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Minimize2} className={cx("ui-lucide-icon", className)} {...rest} />
)
