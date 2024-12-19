import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BriefcaseMedical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BriefcaseMedicalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BriefcaseMedicalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BriefcaseMedical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
