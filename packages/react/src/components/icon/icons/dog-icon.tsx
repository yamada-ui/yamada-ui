import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Dog } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DogIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Dog} className={cx("ui-lucide-icon", className)} {...rest} />
)
