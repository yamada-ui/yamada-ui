import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Scale } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScaleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScaleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Scale} className={cx("ui-lucide-icon", className)} {...rest} />
)
