import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Popsicle } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PopsicleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PopsicleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Popsicle} className={cx("ui-lucide-icon", className)} {...rest} />
)
