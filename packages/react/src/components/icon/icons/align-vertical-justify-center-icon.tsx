import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalJustifyCenter } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlignVerticalJustifyCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalJustifyCenterIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={AlignVerticalJustifyCenter}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
