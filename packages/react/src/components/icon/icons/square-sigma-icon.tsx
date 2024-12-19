import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareSigma } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareSigmaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSigmaIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareSigma}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
