import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SeparatorVertical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SeparatorVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SeparatorVerticalIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SeparatorVertical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
