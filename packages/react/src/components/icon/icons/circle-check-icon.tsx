import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
