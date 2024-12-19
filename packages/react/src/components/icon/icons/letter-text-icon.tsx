import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LetterText } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LetterTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LetterTextIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={LetterText} className={cx("ui-lucide-icon", className)} {...rest} />
)
