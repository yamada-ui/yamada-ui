import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RockingChair } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RockingChairIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RockingChairIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={RockingChair}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
