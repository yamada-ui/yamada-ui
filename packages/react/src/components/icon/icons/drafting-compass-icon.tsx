import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { DraftingCompass } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DraftingCompassIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DraftingCompassIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={DraftingCompass}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
