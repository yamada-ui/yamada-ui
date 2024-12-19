import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Copyleft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CopyleftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CopyleftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Copyleft} className={cx("ui-lucide-icon", className)} {...rest} />
)
