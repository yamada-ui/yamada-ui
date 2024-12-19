import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalJustifyCenter } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignHorizontalJustifyCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalJustifyCenterIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignHorizontalJustifyCenter}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
