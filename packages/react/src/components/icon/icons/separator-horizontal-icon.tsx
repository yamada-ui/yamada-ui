import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SeparatorHorizontal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SeparatorHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SeparatorHorizontalIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SeparatorHorizontal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
