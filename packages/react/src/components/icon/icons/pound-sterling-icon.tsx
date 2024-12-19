import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PoundSterling } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PoundSterlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PoundSterlingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PoundSterling}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
