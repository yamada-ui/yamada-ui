import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Keyboard } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `KeyboardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyboardIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Keyboard} className={cx("ui-lucide-icon", className)} {...rest} />
)
