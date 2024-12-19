import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Umbrella } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UmbrellaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UmbrellaIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Umbrella} className={cx("ui-lucide-icon", className)} {...rest} />
)
