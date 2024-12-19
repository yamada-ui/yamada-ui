import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleCheckBig } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleCheckBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleCheckBigIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleCheckBig}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
