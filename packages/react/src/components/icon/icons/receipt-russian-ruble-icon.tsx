import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ReceiptRussianRuble } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ReceiptRussianRubleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptRussianRubleIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ReceiptRussianRuble}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
