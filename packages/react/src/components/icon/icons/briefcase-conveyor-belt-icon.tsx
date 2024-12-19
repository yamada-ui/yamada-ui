import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BriefcaseConveyorBelt } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BriefcaseConveyorBeltIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BriefcaseConveyorBeltIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={BriefcaseConveyorBelt}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
