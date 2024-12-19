import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LoaderCircle } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LoaderCircleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LoaderCircleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={LoaderCircle}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
