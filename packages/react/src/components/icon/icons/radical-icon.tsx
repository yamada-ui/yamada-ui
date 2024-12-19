import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Radical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RadicalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadicalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Radical} className={cx("ui-lucide-icon", className)} {...rest} />
)
