import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LaptopMinimalCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LaptopMinimalCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LaptopMinimalCheckIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={LaptopMinimalCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
