import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Key } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `KeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Key} className={cx("ui-lucide-icon", className)} {...rest} />
)
