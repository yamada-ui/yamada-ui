import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Armchair } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArmchairIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArmchairIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Armchair} className={cx("ui-lucide-icon", className)} {...rest} />
)
