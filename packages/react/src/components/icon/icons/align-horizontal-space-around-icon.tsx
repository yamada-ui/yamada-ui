import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalSpaceAround } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignHorizontalSpaceAroundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalSpaceAroundIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignHorizontalSpaceAround}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
