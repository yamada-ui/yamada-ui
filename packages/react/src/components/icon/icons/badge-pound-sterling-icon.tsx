import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BadgePoundSterling } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgePoundSterlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgePoundSterlingIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={BadgePoundSterling}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
