import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SignpostBig } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SignpostBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignpostBigIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SignpostBig}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
