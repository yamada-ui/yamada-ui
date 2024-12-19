import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { EqualApproximately } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `EqualApproximatelyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EqualApproximatelyIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={EqualApproximately}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
