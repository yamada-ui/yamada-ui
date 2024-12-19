import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptText } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ReceiptTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptTextIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ReceiptText}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
