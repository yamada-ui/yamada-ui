import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalDistributeEnd } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignVerticalDistributeEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalDistributeEndIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignVerticalDistributeEnd}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
