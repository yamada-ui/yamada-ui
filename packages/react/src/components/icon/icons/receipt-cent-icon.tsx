import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptCent } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ReceiptCentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptCentIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ReceiptCent}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
