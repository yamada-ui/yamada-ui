import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CigaretteOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CigaretteOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CigaretteOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CigaretteOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
