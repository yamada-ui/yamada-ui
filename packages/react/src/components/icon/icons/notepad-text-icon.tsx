import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { NotepadText } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `NotepadTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotepadTextIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={NotepadText}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
