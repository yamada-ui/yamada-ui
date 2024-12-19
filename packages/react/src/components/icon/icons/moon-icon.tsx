import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Moon } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MoonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoonIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Moon} className={cx("ui-lucide-icon", className)} {...rest} />
)
