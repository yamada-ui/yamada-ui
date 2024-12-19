import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TvMinimal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TvMinimalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TvMinimalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={TvMinimal} className={cx("ui-lucide-icon", className)} {...rest} />
)
