import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalDistributeEnd } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignHorizontalDistributeEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalDistributeEndIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignHorizontalDistributeEnd}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
