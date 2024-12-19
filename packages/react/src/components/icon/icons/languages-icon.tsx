import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Languages } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LanguagesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LanguagesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Languages} className={cx("ui-lucide-icon", className)} {...rest} />
)
