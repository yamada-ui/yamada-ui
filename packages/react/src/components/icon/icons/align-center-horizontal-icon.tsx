import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignCenterHorizontal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignCenterHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignCenterHorizontalIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignCenterHorizontal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
