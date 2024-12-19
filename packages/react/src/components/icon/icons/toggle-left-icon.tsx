import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ToggleLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ToggleLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ToggleLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ToggleLeft} className={cx("ui-lucide-icon", className)} {...rest} />
)
