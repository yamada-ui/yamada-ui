import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CarTaxiFront } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CarTaxiFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CarTaxiFrontIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CarTaxiFront}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
