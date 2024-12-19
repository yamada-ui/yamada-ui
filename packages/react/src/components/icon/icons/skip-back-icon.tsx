import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SkipBack } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SkipBackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SkipBackIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SkipBack} className={cx("ui-lucide-icon", className)} {...rest} />
)
