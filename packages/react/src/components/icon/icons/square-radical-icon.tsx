import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareRadical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareRadicalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareRadicalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareRadical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
