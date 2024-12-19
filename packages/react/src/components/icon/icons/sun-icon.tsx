import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Sun } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SunIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Sun} className={cx("ui-lucide-icon", className)} {...rest} />
)
