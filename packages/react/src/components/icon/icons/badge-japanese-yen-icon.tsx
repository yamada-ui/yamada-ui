import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeJapaneseYen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgeJapaneseYenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeJapaneseYenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BadgeJapaneseYen}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)