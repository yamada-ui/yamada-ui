import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Origami } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `OrigamiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OrigamiIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Origami} className={cx("ui-lucide-icon", className)} {...rest} />
)
