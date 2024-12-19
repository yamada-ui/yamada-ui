import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Projector } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ProjectorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ProjectorIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Projector} className={cx("ui-lucide-icon", className)} {...rest} />
)
