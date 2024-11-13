import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { HdmiPort as OriginalHdmiPort } from "lucide-react"

/**
 * `HdmiPortIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HdmiPortIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalHdmiPort}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `HdmiPort` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `HdmiPortIcon` instead.
 */
export const HdmiPort = HdmiPortIcon
