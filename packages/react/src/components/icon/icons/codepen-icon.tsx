import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Codepen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CodepenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CodepenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Codepen} className={cx("ui-lucide-icon", className)} {...rest} />
)
