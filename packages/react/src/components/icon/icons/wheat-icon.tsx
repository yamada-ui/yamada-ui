import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Wheat } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WheatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WheatIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Wheat} className={cx("ui-lucide-icon", className)} {...rest} />
)
