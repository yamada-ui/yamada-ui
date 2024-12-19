import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ScissorsLineDashed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScissorsLineDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScissorsLineDashedIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ScissorsLineDashed}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
