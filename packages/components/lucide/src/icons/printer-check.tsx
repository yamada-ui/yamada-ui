import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { PrinterCheck as OriginalPrinterCheck } from "lucide-react"

/**
 * `PrinterCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PrinterCheckIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalPrinterCheck}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `PrinterCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PrinterCheckIcon` instead.
 */
export const PrinterCheck = PrinterCheckIcon
