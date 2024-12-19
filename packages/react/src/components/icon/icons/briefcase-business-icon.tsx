import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BriefcaseBusiness } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BriefcaseBusinessIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BriefcaseBusinessIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={BriefcaseBusiness}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
